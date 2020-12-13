module.exports = (server, dbJasmin) => {
    server.get('/api/sales/sales-per-city', (req, res) => {
        const sales = dbJasmin.SourceDocuments.SalesInvoices.Invoice;
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
}
