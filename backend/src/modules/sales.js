const request = require("request");

module.exports = (server, db) => {

    const processTopProducts = (salesData) => {
        let topProducts = [];

        salesData.forEach((sale) => {
            sale.documentLines.forEach((product) => {
                if (Object.prototype.hasOwnProperty.call(topProducts, product.salesItem)) {
                    topProducts[product.salesItem].Quantity += parseInt(product.quantity, 10);
                } else {
                    topProducts[product.salesItem] = {
                        ProductDescription: product.description,
                        Quantity: parseInt(product.quantity, 10),
                    };
                }
            });
        });

        topProducts = Object.keys(topProducts)
            .sort((a, b) => topProducts[b].Quantity - topProducts[a].Quantity)
            .map(productCode => ({
                id: productCode,
                name: topProducts[productCode].ProductDescription,
                quantity: topProducts[productCode].Quantity
            }));

        return topProducts;
    };

    const processSalesPerCity = (salesData) => {
        let salesPerCity = {};

        salesData.forEach((sale) => {
            if (salesPerCity[sale.unloadingCityName] && sale.unloadingCityName != null) {
                salesPerCity[sale.unloadingCityName].netTotal += parseFloat(sale.grossValue.amount);
            } else if (sale.unloadingCityName != null) {
                salesPerCity[sale.unloadingCityName] = {
                    netTotal: parseFloat(sale.grossValue.amount),
                };
            }
        });

        return salesPerCity;
    }

    const processRevenueFromSales = (salesData) => {
        let revenueFromSales = 0;

        salesData.forEach((sale) => {
            revenueFromSales += sale.grossValue.amount;
        });

        return revenueFromSales;
    };
    /*
        server.get('/api/sales/sales-per-city', (req, res) => {
            const sales = db.SourceDocuments.SalesInvoices.Invoice;
            const validTypes = ['FT', 'FS', 'FR', 'VD'];
            const salesPerCity = {};

            if (Array.isArray(sales)) {
                sales.forEach(sale => {
                    if (!(sale.Line.length && validTypes.includes(sale.InvoiceType))) return;

                    if (salesPerCity[sale.ShipTo.Address.City]) {
                        salesPerCity[sale.ShipTo.Address.City].quantity += 1;
                        salesPerCity[sale.ShipTo.Address.City].netTotal += parseFloat(
                            sale.DocumentTotals.NetTotal,
                        );
                    } else {
                        salesPerCity[sale.ShipTo.Address.City] = {
                            quantity: 1,
                            netTotal: parseFloat(sale.DocumentTotals.NetTotal),
                        };
                    }
                });
            } else {
                salesPerCity[sales.ShipTo.Address.City] = {
                    quantity: 1,
                    netTotal: parseFloat(sales.DocumentTotals.NetTotal),
                };
            }
            res.header("Access-Control-Allow-Origin", "*");
            res.json(salesPerCity);
        });*/

    server.get("/api/sales/sales-per-city", (req, res) => {
        let salesPerCity;
        const options = {
            method: "GET",
            url: "https://my.jasminsoftware.com/api/242845/242845-0001/billing/invoices",
            headers: {
                Authorization: req.headers.authorization,
                "Content-Type": "application/json",
            },
        };

        request(options, function(error, response, body) {
            salesPerCity = processSalesPerCity(JSON.parse(response.body));
            if (error) throw new Error(error);
            res.header("Access-Control-Allow-Origin", "*");
            res.json(salesPerCity);
        });
    });

    server.get('/api/sales/total-sales', (req, res) => {
        // TODO
    });

    server.get('/api/sales/monthly-cumulative-sales', (req, res) => {
        const salesInvoices = db.SourceDocuments.SalesInvoices.Invoice;
        const cumulative = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        salesInvoices.forEach(invoice => {
            cumulative[parseInt(invoice.Period, 10) - 1] =
                parseFloat(invoice.DocumentTotals.GrossTotal) +
                cumulative[parseInt(invoice.Period, 10) - 1];
        });
        for (let i = 1; i < cumulative.length; i++) {
            cumulative[i] += cumulative[i - 1];
        }

        res.header("Access-Control-Allow-Origin", "*");
        res.json({ cumulative });
    });
    /*
        server.get('/api/sales/top-products', (req, res) => {
            let products = {};
            const validTypes = ['FT', 'FS', 'FR', 'VD'];

            db.SourceDocuments.SalesInvoices.Invoice.forEach(invoice => {
                const type = invoice.InvoiceType;

                if (!(invoice.Line.length && validTypes.includes(type))) return;

                invoice.Line.forEach(line => {
                    const { ProductCode, UnitPrice, ProductDescription, Quantity } = line;
                    if (Object.prototype.hasOwnProperty.call(products, ProductCode)) {
                        products[ProductCode].Quantity += parseInt(Quantity, 10);
                    } else {
                        products[ProductCode] = {
                            ProductDescription,
                            UnitPrice: parseFloat(UnitPrice, 10),
                            Quantity: parseInt(Quantity, 10),
                        };
                    }
                });
            });

            products = Object.keys(products)
                .sort((a, b) => products[b].Quantity - products[a].Quantity)
                .map(productCode => ({
                    id: productCode,
                    name: products[productCode].ProductDescription,
                    quantity: products[productCode].Quantity,
                    value: Number(
                        (
                            products[productCode].Quantity * products[productCode].UnitPrice
                        ).toFixed(2),
                    ),
                }));
            res.header("Access-Control-Allow-Origin", "*");
            res.json(products);
        });*/

    server.get("/api/sales/top-products", (req, res) => {
        let topProducts;
        const options = {
            method: "GET",
            url: "https://my.jasminsoftware.com/api/242845/242845-0001/billing/invoices",
            headers: {
                Authorization: req.headers.authorization,
                "Content-Type": "application/json",
            },
        };

        request(options, function(error, response, body) {
            topProducts = processTopProducts(JSON.parse(response.body));
            if (error) throw new Error(error);
            res.header("Access-Control-Allow-Origin", "*");
            res.json(topProducts);
        });
    });

    server.get('/api/sales/top-customers', (req, res) => {
        const salesInvoices = db.SourceDocuments.SalesInvoices.Invoice;
        const validTypes = ['FT', 'FS', 'FR', 'VD'];
        const customers = [];

        if (Array.isArray(salesInvoices)) {
            salesInvoices.forEach(invoice => {
                if (validTypes.includes(invoice.InvoiceType)) {
                    const customerID = invoice.CustomerID;
                    let purchased = 0;

                    if (Array.isArray(invoice.Line)) {
                        invoice.Line.forEach(line => {
                            const { UnitPrice, Quantity } = line;
                            purchased += UnitPrice * Quantity;
                        });
                    } else {
                        purchased = invoice.Line.UnitPrice * invoice.Line.Quantity;
                    }
                    let exists = false;
                    for (let i = 0; i < customers.length; i += 1) {
                        if (customers[i].id === customerID) {
                            exists = true;
                            customers[i].nPurchases += 1;
                            customers[i].totalPurchased += purchased;
                            break;
                        }
                    }
                    if (!exists) {
                        customers.push({
                            id: customerID,
                            totalPurchased: purchased,
                            nPurchases: 1,
                        });
                    }
                }
            });
        } else {
            const invoice = salesInvoices;
            const customerID = invoice.CustomerID;
            let purchased = 0;

            if (validTypes.includes(invoice.InvoiceType)) {
                if (Array.isArray(invoice.Line)) {
                    invoice.Line.forEach(line => {
                        const { UnitPrice, Quantity } = line;
                        purchased += UnitPrice * Quantity;
                    });
                } else {
                    purchased = invoice.Line.UnitPrice * invoice.Line.Quantity;
                }
                let exists = false;
                for (let i = 0; i < customers.length; i += 1) {
                    if (customers[i].id === customerID) {
                        exists = true;
                        customers[i].nPurchases += 1;
                        customers[i].totalPurchased += purchased;
                        break;
                    }
                }
                if (!exists) {
                    customers.push({
                        id: customerID,
                        totalPurchased: purchased,
                        nPurchases: 1,
                    });
                }
            }
        }

        for (let i = 0; i < customers.length; i += 1) {
            customers[i].totalPurchased = parseFloat(customers[i].totalPurchased).toFixed(
                2,
            );
        }

        const sorted = customers.sort((a, b) => a.totalPurchased > b.totalPurchased);
        res.json(sorted);
    });

    server.get("/api/sales/revenue", (req, res) => {
        const salesInvoices = db.SourceDocuments.SalesInvoices.Invoice;
        const revenue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        salesInvoices.forEach((invoice) => {
            revenue[parseInt(invoice.Period, 10) - 1] =
                parseFloat(invoice.DocumentTotals.GrossTotal) +
                revenue[parseInt(invoice.Period, 10) - 1];
        });
        res.header("Access-Control-Allow-Origin", "*");
        res.json({ revenue });
    });
    /*
        server.get("/api/sales/revenueFromSales", (req, res) => {
            const salesInvoices = db.SourceDocuments.SalesInvoices.Invoice;
            const monthlyCumulative = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            salesInvoices.forEach((invoice) => {
                monthlyCumulative[parseInt(invoice.Period, 10) - 1] =
                    parseFloat(invoice.DocumentTotals.GrossTotal) +
                    monthlyCumulative[parseInt(invoice.Period, 10) - 1];
            });
            res.header("Access-Control-Allow-Origin", "*");
            res.json(monthlyCumulative[11]);
        });*/

    server.get("/api/sales/revenueFromSales", (req, res) => {
        let revenueFromSales;
        const options = {
            method: "GET",
            url: "https://my.jasminsoftware.com/api/242845/242845-0001/billing/invoices",
            headers: {
                Authorization: req.headers.authorization,
                "Content-Type": "application/json",
            },
        };

        request(options, function(error, response, body) {
            revenueFromSales = processRevenueFromSales(JSON.parse(response.body));
            if (error) throw new Error(error);
            res.header("Access-Control-Allow-Origin", "*");
            res.json(revenueFromSales);
        });
    });

    server.get("/api/customers", (req, res) => {

        const options = {
            method: "GET",
            url: "https://my.jasminsoftware.com/api/242845/242845-0001/salesCore/customerParties",
            headers: {
                Authorization: "Bearer " + req.body.token,
                "Content-Type": "application/json",
            },
        };

        request(options, function(error, response, body) {

            res.header("Access-Control-Allow-Origin", "*");
            res.json((JSON.parse(body)));
        });

    });

}