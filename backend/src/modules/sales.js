module.exports = (server, db) => {
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
