module.exports = (server, db, basePrimaveraUrl) => {
  server.get('/api/purchases/suppliers', (req, res) => {
    const options = {
      method: 'GET',
      url: `${basePrimaveraUrl}/purchases/orders`,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (!global.primaveraRequests)
      return res.json({ msg: 'Primavera token missing' });

    return global.primaveraRequests(options, function (error, response, body) {
      if (error) throw new Error(error);

      res.json(processProductSuppliers(null, JSON.parse(body), req.query.year));
    });
  });

  server.get('/api/purchases/cogs', (req, res) => {
    // TODO
  });

  server.get('/api/purchases/total-purchases', (req, res) => {
    // TODO
  });

  server.get('/api/purchases/monthly-cumulative-purchases', (req, res) => {
    // TODO
  });

  server.get('/api/purchases/orders', (req, res) => {
    // TODO
  });
};
