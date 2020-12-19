const request = require("request");

module.exports = (server, db) => {

    const processWarehouses = (items) => {
        const top5Warehouses = {};

        if (items) {
            items.forEach((item) => {
                item.materialsItemWarehouses.forEach((materialsItem) => {
                    if (top5Warehouses[materialsItem.warehouse]) {
                        top5Warehouses[materialsItem.warehouse].amount +=
                            materialsItem.inventoryBalance.reportingAmount; // ?? or just .amount
                    } else {
                        top5Warehouses[materialsItem.warehouse] = {
                            id: materialsItem.warehouse,
                            name: materialsItem.warehouseDescription,
                            amount: materialsItem.inventoryBalance.reportingAmount,
                        };
                    }
                });
            });
        }

        return Object.keys(top5Warehouses).map((warehouse) => top5Warehouses[warehouse]);
    };

    const processProducts = (stockData) => {
        const page = 1;
        const pageSize = 8;

        const response = {
            products: []
        };

        const productsList = [];

        stockData.forEach((materialItem) => {
            if (materialItem.itemSubtype == "1") {
                const quantity = getStockQuantity(materialItem);
                const value = getStockValue(materialItem);
                productsList.push({
                    productKey: materialItem.itemKey,
                    name: materialItem.description,
                    brand: materialItem.brand,
                    quantity: quantity,
                    value: value,
                    error: quantity < 0,
                });
            }
        });

        response.products = productsList.sort((a, b) => {
            if (a.value < b.value) {
                return 1;
            } else if (a.value > b.value) {
                return -1;
            }

            return 0;
        }).slice((page - 1) * pageSize, page * pageSize);

        return response;
    };

    const getStockQuantity = (item) => {
        return item.materialsItemWarehouses.reduce((aux, val) => {
            aux += val.stockBalance;
            return aux;
        }, 0);
    }

    const getStockValue = (item) => {

        return item.materialsItemWarehouses.reduce((aux, val) => {
            aux += val.inventoryBalance.amount;
            return aux;
        }, 0);
    }

    const processStock = (materials) =>
        materials.reduce((aux, val) => aux + val.materialsItemWarehouses.reduce((aux1, val1) => aux1 + val1.inventoryBalance.amount, 0), 0);

    server.get("/api/inventory/total-stock", (req, res) => {
        var stock = 0;
        const options = {
            method: "GET",
            url: "https://my.jasminsoftware.com/api/242845/242845-0001/materialscore/materialsitems",
            headers: {
                Authorization: req.headers.authorization,
                "Content-Type": "application/json",
            },
        };

        request(options, function(error, response, body) {
            stock = processStock(JSON.parse(response.body));
            if (error) throw new Error(error);
            res.header("Access-Control-Allow-Origin", "*");
            res.json({ stock });
        });
    });

    server.get("/api/inventory/assets-top-warehouses", (req, res) => {
        var stock = 0;
        const options = {
            method: "GET",
            url: "https://my.jasminsoftware.com/api/242845/242845-0001/materialscore/materialsitems",
            headers: {
                Authorization: req.headers.authorization,
                "Content-Type": "application/json",
            },
        };

        request(options, function(error, response, body) {
            stock = processStock(JSON.parse(response.body));
            if (error) throw new Error(error);
            res.header("Access-Control-Allow-Origin", "*");
            res.json(processWarehouses(JSON.parse(body)));
        });
    });

    server.get("/api/inventory/products-stock", (req, res) => {
        let stock;
        const options = {
            method: "GET",
            url: "https://my.jasminsoftware.com/api/242845/242845-0001/materialscore/materialsitems",
            headers: {
                Authorization: req.headers.authorization,
                "Content-Type": "application/json",
            },
        };

        request(options, function(error, response, body) {
            stock = processProducts(JSON.parse(response.body));
            if (error) throw new Error(error);
            res.header("Access-Control-Allow-Origin", "*");
            res.json(stock);
        });
    });
};