const request = require("request");

module.exports = (server, db) => {

    const processPurchases = (orders, year) => {
      const monthlyCumulativeValue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      orders
        // eslint-disable-next-line eqeqeq
        .filter((order) => moment(order.documentDate).year() == year)
        .forEach(({ documentDate, payableAmount }) => {
          const month = moment(documentDate).month();

          monthlyCumulativeValue[month] += payableAmount.amount;
        });

      return monthlyCumulativeValue;
    };

  server.get('/api/purchases', (req, res) => {

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
       let monthlyCumulativeValue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
       monthlyCumulativeValue = processPurchases(
         JSON.parse(body),
         req.query.year
       );
      res.header("Access-Control-Allow-Origin", "*");
      res.json(processWarehouses(JSON.parse(body)));
    });
    });
};
