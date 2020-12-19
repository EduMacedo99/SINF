const request = require("request");

module.exports = (server, db) => {

    const processMonthlySales = (salesData) => {
        const salesByTimestamp = {};

        const monthlySales = {
            salesByTimestamp: {}
        };

        salesData.forEach((sale) => {
            const timestamp = extractTimestamp(sale.documentDate.split("T")[0]);

            if (salesByTimestamp[timestamp] == undefined) {
                salesByTimestamp[timestamp] = 0;
            }

            salesByTimestamp[timestamp] += sale.grossValue.amount;
        });

        Object.keys(salesByTimestamp).sort().forEach((key) => {
            monthlySales.salesByTimestamp[key] = salesByTimestamp[key];
        });

        return monthlySales;
    };

    const extractTimestamp = (date) => {
        const aux = date.match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
        return `${aux[1]}-${aux[2]}`;
    }

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

    server.get("/api/sales/monthly-cumulative-sales", (req, res) => {
        let cumulativeMonthlySalesAux;
        let cumulative = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let year = new Date().getFullYear();

        const options = {
            method: "GET",
            url: "https://my.jasminsoftware.com/api/242845/242845-0001/billing/invoices",
            headers: {
                Authorization: req.headers.authorization,
                "Content-Type": "application/json",
            },
        };

        request(options, function(error, response, body) {
            cumulativeMonthlySalesAux = processMonthlySales(JSON.parse(response.body));
            for (let i = 0; i < 12; i++) {
                if (cumulativeMonthlySalesAux.salesByTimestamp[year.toString() + "-" + (i + 1).toString()] !== undefined) {
                    cumulative[i] = cumulativeMonthlySalesAux.salesByTimestamp[year.toString() + "-" + (i + 1).toString()];
                }
            }
            for (let i = 1; i < cumulative.length; i++) {
                cumulative[i] += cumulative[i - 1];
            }
            if (error) throw new Error(error);
            res.header("Access-Control-Allow-Origin", "*");
            res.json({ cumulative });
        });
    });

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

    server.get("/api/sales/revenue", (req, res) => {
        let monthlySalesAux;
        let revenue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let year = new Date().getFullYear();

        const options = {
            method: "GET",
            url: "https://my.jasminsoftware.com/api/242845/242845-0001/billing/invoices",
            headers: {
                Authorization: req.headers.authorization,
                "Content-Type": "application/json",
            },
        };

        request(options, function(error, response, body) {
            monthlySalesAux = processMonthlySales(JSON.parse(response.body));
            for (let i = 0; i < 12; i++) {
                if (monthlySalesAux.salesByTimestamp[year.toString() + "-" + (i + 1).toString()] !== undefined) {
                    revenue[i] = monthlySalesAux.salesByTimestamp[year.toString() + "-" + (i + 1).toString()];
                }
            }
            if (error) throw new Error(error);
            res.header("Access-Control-Allow-Origin", "*");
            res.json({ revenue });
        });
    });

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
}