const request = require("request");

module.exports = (server, db, accounts) => {
  server.get("/token", (req, res) => {
    let username = 'username' in req.query ? req.query['username'] : null;
    let password = 'password' in req.query ? req.query['password'] : null;
    let isValid = false;
    for (let i = 0; i < accounts.User.length; i++) {
      if (JSON.stringify(accounts.User[i].username) == username && JSON.stringify(accounts.User[i].password) == password) {
        isValid = true;
        break;
      }
    }
    if (isValid) {
      const options = {
        method: "POST",
        url: "https://identity.primaverabss.com/connect/token",
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
        formData: {
          client_id: "FEUPSINF",
          client_secret: "23f8ba55-b745-4857-9f6f-d7f53391750b",
          scope: "application",
          grant_type: "client_credentials",
        },
      };

      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.header("Access-Control-Allow-Origin", "*");
        res.json(body);
      });
    }
  });
};