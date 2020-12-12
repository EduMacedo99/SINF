const request = require("request");

module.exports = (server, db) => {

    const processWarehouses = (items) => {
      const warehouses = {};
      if (items) {
        items.forEach((item) => {
          item.materialsItemWarehouses.forEach((materialsItem) => {
            if (warehouses[materialsItem.warehouse]) {
              warehouses[materialsItem.warehouse].amount +=
                materialsItem.inventoryBalance.reportingAmount; // ?? or just .amount
            } else {
              warehouses[materialsItem.warehouse] = {
                id: materialsItem.warehouse,
                name: materialsItem.warehouseDescription,
                amount: materialsItem.inventoryBalance.reportingAmount,
              };
            }
          });
        });
      }
      return Object.keys(warehouses).map((warehouse) => warehouses[warehouse]);
    };

    const processStock = (materials) =>
      materials.reduce(
        (accum, val) =>
          accum +
          val.materialsItemWarehouses.reduce(
            (accum2, val2) => accum2 + val2.inventoryBalance.amount,
            0
          ),
        0
      );

    server.get("/inventory/stock", (req, res) => {

        console.log(req.body.token);
        console.log("aaaaaa");
        var stock = 0;
        const options = {
          method: "GET",
          url:
            "https://my.jasminsoftware.com/api/242845/242845-0001/materialscore/materialsitems",
          headers: {
            Authorization: "Bearer " + req.body.token,
            "Content-Type": "application/json",
          },
        };

        request(options, function(error, response, body) {

            stock = processStock(JSON.parse(response.body));
            if (error) throw new Error(error);
            res.header("Access-Control-Allow-Origin", "*");
            res.json(stock);
        });
    });

    server.get("/inventory/warehouses", (req, res) => {
      var stock = 0;
      const options = {
        method: "GET",
        url:
          "https://my.jasminsoftware.com/api/242845/242845-0001/materialscore/materialsitems",
        headers: {
          Authorization: "Bearer " + req.body.token,
          "Content-Type": "application/json",
        },
      };

      request(options, function (error, response, body) {
        stock = processStock(JSON.parse(response.body));
        if (error) throw new Error(error);
        res.header("Access-Control-Allow-Origin", "*");
        res.json(processWarehouses(JSON.parse(body)));
      });
    });
};