module.exports = (server, db, basePrimaveraUrl) => {
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

        res.json(salesPerCity);
    });

    server.get('/api/sales/total-sales', (req, res) => {
        // TODO
    });

    server.get('/api/sales/monthly-cumulative-sales', (req, res) => {
        const salesInvoices = db.SourceDocuments.SalesInvoices.Invoice;
        const sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        salesInvoices.forEach(invoice => {
            sales[parseInt(invoice.Period, 10) - 1] =
                parseFloat(invoice.DocumentTotals.GrossTotal) +
                sales[parseInt(invoice.Period, 10) - 1];
        });
        res.header("Access-Control-Allow-Origin", "*");
        res.json({ sales });
    });

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

        res.json(products);
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
        res.json(sorted.slice(0, 5));
    });
}
