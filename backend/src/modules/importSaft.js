import formidable from "formidable";
import shell from "shelljs";
const fs = require("fs");

module.exports = (server, db) => {
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

    form.on("file", function (name, file) {
      console.log("Uploaded " + file.name);
      let ret = shell.exec("yarn parse -s " + file.name);
      if (ret.code !== 0) {
        shell.echo("Parsing failed");
      } else {
        shell.echo("DB updated");
      }

      res.header("Access-Control-Allow-Origin", "*");
      res.send({ message: "uploaded" });
    });
  });
};
