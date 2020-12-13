const request = require("request");

const processProductSuppliers = (suppliersData) => {
  /*const page = req.query.page || 1;
  const pageSize = req.query.pageSize || 15;*/

  const suppliers = [];
  suppliersData.forEach((supplier) => {
    const accumulator = supplier.documentLines.reduce((accumulator, order) => {
      accumulator.quantity += order.quantity;
      accumulator.totalPrice += order.unitPrice.amount;
      accumulator.num++;
      return accumulator;
    }, { quantity: 0, totalPrice: 0, num: 0 });
    suppliers.push({
      supplierName: supplier.sellerSupplierPartyName,
      supplierKey: supplier.sellerSupplierParty,
      quantity: accumulator.quantity,
      priceRatio: (accumulator.totalPrice / accumulator.num).toFixed(2)
    });

  });
  return ({
    suppliers: suppliers.sort((a, b) => {
      if (a.priceRatio > b.priceRatio) {
        return 1;
      } else if (a.priceRatio < b.priceRatio) {
        return -1;
      }

      return 0;
    }) /*.slice((page - 1) * pageSize, page * pageSize)*/
  });
};

const processOrders = (purchasesData) => {
  /*const page = req.query.page || 1;
  const pageSize = req.query.pageSize || 15;*/

  const purchasesList = [];

  purchasesData.forEach((document) => {
    purchasesList.push({
      supplierName: document.sellerSupplierPartyName,
      supplierTaxID: document.sellerSupplierPartyTaxId,
      totalValue: new Intl.NumberFormat('en-UK').format(document.payableAmount.amount),
      date: document.exchangeRateDate.split("T")[0],
      purchaseId: document.documentLines[0].orderId,
    });
  });

  return ({
    purchasesList: purchasesList.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else if (a.date > b.date) {
        return -1;
      }

      return 0;
    }) /*.slice((page - 1) * pageSize, page * pageSize)*/
  });
};

const processMonthlyPurchases = (purchasesData) => {
  const purchasesByTimestamp = {};

  const response = {
    purchasesByTimestamp: {}
  };

  purchasesData.forEach((purchase) => {
    const timestamp = extractTimestamp(purchase.documentDate.split("T")[0]);

    if (purchasesByTimestamp[timestamp] == undefined) {
      purchasesByTimestamp[timestamp] = 0;
    }

    purchasesByTimestamp[timestamp] += purchase.payableAmount.amount;
  });

  Object.keys(purchasesByTimestamp).sort().forEach((key) => {
    response.purchasesByTimestamp[key] = purchasesByTimestamp[key];
  });
  return response;
};

const extractTimestamp = (date) => {
  const match = date.match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
  return `${match[1]}-${match[2]}`;
}

module.exports = (server, db, basePrimaveraUrl) => {
  server.get('/api/purchases/suppliers', (req, res) => {
    var suppliers = 0;
    const options = {
      method: "GET",
      url: `${basePrimaveraUrl}/purchases/orders`,
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    };

    request(options, function (error, response, body) {
      suppliers = processProductSuppliers(JSON.parse(response.body));
      if (error) throw new Error(error);
      res.header("Access-Control-Allow-Origin", "*");
      res.json(suppliers);
    });
  });

  server.get('/api/purchases/accounts-payable', (req, res) => {
    // TODO
  });

  server.get('/api/purchases/total-purchases', (req, res) => {
    var monthlyPurchases = 0;
    const options = {
      method: "GET",
      url: `${basePrimaveraUrl}/invoiceReceipt/invoices`,
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    };

    request(options, function (error, response, body) {
      monthlyPurchases = processMonthlyPurchases(JSON.parse(response.body));
      if (error) throw new Error(error);
      res.header("Access-Control-Allow-Origin", "*");
      res.json(monthlyPurchases);
    });
  });

  server.get('/api/purchases/monthly-cumulative-purchases', (req, res) => {
    var monthlyPurchases = 0;
    const options = {
      method: "GET",
      url: `${basePrimaveraUrl}/invoiceReceipt/invoices`,
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    };

    request(options, function (error, response, body) {
      monthlyPurchases = processMonthlyPurchases(JSON.parse(response.body));
      if (error) throw new Error(error);
      res.header("Access-Control-Allow-Origin", "*");
      res.json(monthlyPurchases);
    });
  });

  server.get('/api/purchases/orders', (req, res) => {
    var orders = 0;
    const options = {
      method: "GET",
      url: `${basePrimaveraUrl}/purchases/orders`,
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    };

    request(options, function (error, response, body) {
      orders = processOrders(JSON.parse(response.body));
      if (error) throw new Error(error);
      res.header("Access-Control-Allow-Origin", "*");
      res.json(orders);
    });
  });
};
