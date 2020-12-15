import formidable from 'formidable'
const fs = require("fs");

module.exports = (server, db) => {
    server.post('/api/import', (req, res) => {
        console.log("aaaaaaaaaaa");
        console.log(req);
        res.header("Access-Control-Allow-Origin", "*");
        res.json("receieved file");
    })

    server.post("/upload", (req, res) => {
      var form = new formidable.IncomingForm();
      form.parse(req);

      form.on("fileBegin", function (name, file) {
        var path = __dirname;
        if (!fs.existsSync(path)) {
          fs.mkdirSync(path);
        }
        file.path = __dirname + "/../../" + file.name;
      });

      console.log(form)
      form.on("file", function (name, file) {
        console.log("Uploaded " + file.name);
        res.header("Access-Control-Allow-Origin", "*");
        res.send({ message: "uploaded" });
      });
    });
}