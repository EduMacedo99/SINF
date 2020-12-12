const request = require("request");

module.exports = (server, db) => {
    server.get("/inventory/stock", (req, res) => {

        console.log(req.body.token);

        const options = {
            method: "GET",
            url: "https://my.jasminsoftware.com/api/242845/242845-0001/materialscore/materialsitems",
            headers: {
                "Authorization": req.body.token,
                "Content-Type": "application/json"
            }
        };

        request(options, function(error, response, body) {
            console.log(response);
            if (error) throw new Error(error);
            res.header("Access-Control-Allow-Origin", "*");
            res.json(body);
        });
    });
};