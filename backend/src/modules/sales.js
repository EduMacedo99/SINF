module.exports = (server, db) => {
    server.get('/sales/sales-per-district', (req, res) => {
        let startDate = 'start-date' in req.query ? new Date(req.query['start-date']) : null;
        let endDate = 'end-date' in req.query ? new Date(req.query['end-date']) : null;

        let cities = {};

        db.SalesInvoices.forEach((invoice) =>
        {
            const type = invoice.InvoiceType;

            if (!(invoice.Line.length && (type == 'FT' || type == 'FS' || type == 'FR' || type == 'VD')))
                return;

            let invoiceDate = new Date(invoice.InvoiceDate);

            if ((startDate != null && invoiceDate < startDate) || (endDate != null && invoiceDate > endDate))
                return;

            const city = invoice.ShipTo.Address.City;

            if (cities.hasOwnProperty(city)) {
                cities[city].quantity++;
                cities[city].netTotal += parseInt(invoice.DocumentTotals.NetTotal);
            } else {
                cities[city] = {
                    quantity: 1,
                    netTotal: parseInt(invoice.DocumentTotals.NetTotal)
                };
            }
        });

        cities = Object.keys(cities)
            //.sort((a, b) => cities[b].quantity - cities[a].quantity)
            .map(elem => ({
                id: elem,
                value: cities[elem].quantity,
                netTotal: cities[elem].netTotal
            }));

        res.json(cities);
    });
}