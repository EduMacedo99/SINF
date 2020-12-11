const request = require("request");

module.exports = (server, db) => {
  server.get("/token", (req, res) => {
    const options = {
      method: "POST",
      url: "https://identity.primaverabss.com/connect/token",
      headers: {
        "Content-Type": "multipart/form-data",
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
      res.json(body);
    });
  });
};