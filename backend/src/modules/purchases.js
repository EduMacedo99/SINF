const request = require("request");

const processProductSuppliers = (suppliersData) => {
    /*const page = req.query.page || 1;
    const pageSize = req.query.pageSize || 15;*/

    const suppliers = [];
    const supplierNifAux = [];

    suppliersData.forEach((supplier) => {
        if (!supplierNifAux.includes(supplier.accountingPartyTaxId) && supplier.accountingPartyTaxId !== null) {
            suppliers.push({
                supplierName: supplier.sellerSupplierPartyName,
                supplierNif: supplier.accountingPartyTaxId,
                supplierAddress: supplier.loadingPointAddress,
                supplierPostalCode: supplier.loadingPostalZone
            });
            supplierNifAux.push(supplier.accountingPartyTaxId);
        }
    });
    return ({
        suppliers: suppliers.sort((a, b) => {
            if (a.supplierName > b.supplierName) {
                return 1;
            } else if (a.supplierName < b.supplierName) {
                return -1;
            }

            return 0;
        }) /*.slice((page - 1) * pageSize, page * pageSize)*/

    });
};

const processOrders = (purchasesData) => {
    /*const page = req.query.page || 1;
    const pageSize = req.query.pageSize || 15;*/

    const purchasesList = [];
    let productsList = [];

    purchasesData.forEach((document) => {
        document["documentLines"].forEach((product) => {
            productsList.push([product.description, product.quantity, product.unitPrice.amount]);
        });
        purchasesList.push({
            supplierName: document.sellerSupplierPartyName,
            supplierTaxID: document.sellerSupplierPartyTaxId,
            totalValue: new Intl.NumberFormat('en-UK').format(document.payableAmount.amount),
            date: document.exchangeRateDate.split("T")[0],
            purchaseId: document.documentLines[0].orderId,
            products: productsList
        });
        productsList = [];
    });

    return ({
        purchasesList: purchasesList.sort((a, b) => {
            if (a.date < b.date) {
                return 1;
            } else if (a.date > b.date) {
                return -1;
            }

            return 0;
        }) /*.slice((page - 1) * pageSize, page * pageSize)*/
    });
};

const processMonthlyPurchases = (purchasesData) => {
    const purchasesByTimestamp = {};

    const response = {
        purchasesByTimestamp: {}
    };

    purchasesData.forEach((purchase) => {
        const timestamp = extractTimestamp(purchase.documentDate.split("T")[0]);

        if (purchasesByTimestamp[timestamp] == undefined) {
            purchasesByTimestamp[timestamp] = 0;
        }

        purchasesByTimestamp[timestamp] += purchase.payableAmount.amount;
    });

    Object.keys(purchasesByTimestamp).sort().forEach((key) => {
        response.purchasesByTimestamp[key] = purchasesByTimestamp[key];
    });
    return response;
};

function processTransaction(transaction, account_filter) {
    function processLine(line, type) {
        if (line.AccountID.indexOf(account_filter) != 0) return 0;
        return type == 'credit' ? Number.parseInt(line.CreditAmount) : Number.parseInt(line.DebitAmount);
    }

    let totalCredit = 0
    let totalDebit = 0
    if (transaction.Lines.CreditLine && Array.isArray(transaction.Lines.CreditLine)) {
        totalCredit += transaction.Lines.CreditLine.map(line => {
            return processLine(line, 'credit');
        }).reduce((n1, n2) => n1 + n2);
    } else if (transaction.Lines.CreditLine) {
        totalCredit += processLine(transaction.Lines.CreditLine, 'credit');
    }

    if (transaction.Lines.DebitLine && Array.isArray(transaction.Lines.DebitLine)) {
        totalDebit += transaction.Lines.DebitLine.map(line => {
            return processLine(line, 'debit');
        }).reduce((n1, n2) => n1 + n2);
    } else if (transaction.Lines.DebitLine) {
        totalDebit += processLine(transaction.Lines.DebitLine, 'debit');
    }

    return {
        totalCredit: totalCredit,
        totalDebit: totalDebit
    }
}

const extractTimestamp = (date) => {
    const match = date.match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
    return `${match[1]}-${match[2]}`;
}

module.exports = (server, db, basePrimaveraUrl) => {
    server.get('/api/purchases/suppliers', (req, res) => {
        var suppliers = 0;
        const options = {
            method: "GET",
            url: `${basePrimaveraUrl}/purchases/orders`,
            headers: {
                Authorization: req.headers.authorization,
                "Content-Type": "application/json",
            },
        };

        request(options, function(error, response, body) {
            suppliers = processProductSuppliers(JSON.parse(response.body));
            if (error) throw new Error(error);
            res.header("Access-Control-Allow-Origin", "*");
            res.json(suppliers);
        });
    });

    server.get('/api/purchases/accounts-payable', (req, res) => {
        let totalCredit = 0;
        let totalDebit = 0;

        db.GeneralLedgerEntries.Journal.forEach(journal => {
            if (Array.isArray(journal.Transaction)) {
                for (let i = 0; i < journal.Transaction.length; i++) {
                    let ret = processTransaction(journal.Transaction[i], 22);
                    totalCredit += ret.totalCredit;
                    totalDebit += ret.totalDebit;
                }
            } else if (journal.Transaction) {
                let ret = processTransaction(journal.Transaction, 22);
                totalCredit += ret.totalCredit;
                totalDebit += ret.totalDebit;
            }
        });
        res.header("Access-Control-Allow-Origin", "*");
        res.json((totalCredit - totalDebit).toFixed(2));
    });

    server.get('/api/purchases/total-purchases', (req, res) => {
        let totalPurchases = 0;
        let monthlyPurchasesAux;
        let monthlyPurchases = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let year = new Date().getFullYear();
        const options = {
            method: "GET",
            url: `${basePrimaveraUrl}/invoiceReceipt/invoices`,
            headers: {
                Authorization: req.headers.authorization,
                "Content-Type": "application/json",
            },
        };

        request(options, function(error, response, body) {
            monthlyPurchasesAux = processMonthlyPurchases(JSON.parse(response.body));
            for (let i = 0; i < 12; i++) {
                if (monthlyPurchasesAux.purchasesByTimestamp[year.toString() + "-" + (i + 1).toString()] !== undefined) {
                    monthlyPurchases[i] = monthlyPurchasesAux.purchasesByTimestamp[year.toString() + "-" + (i + 1).toString()];
                }
            }
            for (let i = 0; i < monthlyPurchases.length; i++) {
                totalPurchases += monthlyPurchases[i];
            }
            if (error) throw new Error(error);
            res.header("Access-Control-Allow-Origin", "*");
            res.json({ totalPurchases });
        });
    });

    server.get('/api/purchases/monthly-purchases', (req, res) => {
        let monthlyPurchasesAux;
        let monthlyPurchases = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let year = new Date().getFullYear();
        const options = {
            method: "GET",
            url: `${basePrimaveraUrl}/invoiceReceipt/invoices`,
            headers: {
                Authorization: req.headers.authorization,
                "Content-Type": "application/json",
            },
        };

        request(options, function(error, response, body) {
            monthlyPurchasesAux = processMonthlyPurchases(JSON.parse(response.body));
            for (let i = 0; i < 12; i++) {
                if (monthlyPurchasesAux.purchasesByTimestamp[year.toString() + "-" + (i + 1).toString()] !== undefined) {
                    monthlyPurchases[i] = monthlyPurchasesAux.purchasesByTimestamp[year.toString() + "-" + (i + 1).toString()];
                }
            }
            if (error) throw new Error(error);
            res.header("Access-Control-Allow-Origin", "*");
            res.json({ monthlyPurchases });
        });
    });

    server.get('/api/purchases/monthly-cumulative-purchases', (req, res) => {
        let cumulativeMonthlyPurchasesAux;
        let cumulativeMonthlyPurchases = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let year = new Date().getFullYear();
        const options = {
            method: "GET",
            url: `${basePrimaveraUrl}/invoiceReceipt/invoices`,
            headers: {
                Authorization: req.headers.authorization,
                "Content-Type": "application/json",
            },
        };

        request(options, function(error, response, body) {
            cumulativeMonthlyPurchasesAux = processMonthlyPurchases(JSON.parse(response.body));
            for (let i = 0; i < 12; i++) {
                if (cumulativeMonthlyPurchasesAux.purchasesByTimestamp[year.toString() + "-" + (i + 1).toString()] !== undefined) {
                    cumulativeMonthlyPurchases[i] = cumulativeMonthlyPurchasesAux.purchasesByTimestamp[year.toString() + "-" + (i + 1).toString()];
                }
            }
            for (let i = 1; i < cumulativeMonthlyPurchases.length; i++) {
                cumulativeMonthlyPurchases[i] += cumulativeMonthlyPurchases[i - 1];
            }
            if (error) throw new Error(error);
            res.header("Access-Control-Allow-Origin", "*");
            res.json({ cumulativeMonthlyPurchases });
        });
    });

    server.get('/api/purchases/orders', (req, res) => {
        var orders = 0;
        const options = {
            method: "GET",
            url: `${basePrimaveraUrl}/purchases/orders`,
            headers: {
                Authorization: req.headers.authorization,
                "Content-Type": "application/json",
            },
        };

        request(options, function(error, response, body) {
            orders = processOrders(JSON.parse(response.body));
            if (error) throw new Error(error);
            res.header("Access-Control-Allow-Origin", "*");
            res.json(orders);
        });
    });
};