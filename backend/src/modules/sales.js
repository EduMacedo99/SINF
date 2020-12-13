module.exports = (server, dbJasmin) => {
    server.get('/api/sales/sales-per-location', (req, res) => {
        const sales = dbJasmin.SourceDocuments.SalesInvoices.Invoice;
        const validTypes = ['FT', 'FS', 'FR', 'VD'];
        const salesPerLocation = {};

        if (Array.isArray(sales)) {
            sales.forEach(sale => {
                if (!(sale.Line.length && validTypes.includes(sale.InvoiceType))) return;

                if (salesPerLocation[sale.ShipTo.Address.City]) {
                    salesPerLocation[sale.ShipTo.Address.City].quantity += 1;
                    salesPerLocation[sale.ShipTo.Address.City].netTotal += parseFloat(
                        sale.DocumentTotals.NetTotal,
                    );
                } else {
                    salesPerLocation[sale.ShipTo.Address.City] = {
                        quantity: 1,
                        netTotal: parseFloat(sale.DocumentTotals.NetTotal),
                    };
                }
            });
        } else {
            salesPerLocation[sales.ShipTo.Address.City] = {
                quantity: 1,
                netTotal: parseFloat(sales.DocumentTotals.NetTotal),
            };
        }

        res.json(salesPerLocation);
    });
}
