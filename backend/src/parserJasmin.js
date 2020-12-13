import parser from "xml2json";
import args from "./index.js";
import read from "read-file";
import shell from "shelljs";
import { format } from "path";
const fs = require("fs");


if (shell.which("xmllint")) {
  shell.echo("Validating file " + args.source);
  let ret = shell.exec(
    "xmllint --noout --schema saftpt1.04_01_spec.xsd " + args.source
  );
  if (ret.code !== 0) {
    shell.echo("XML NOT valid");
  } else {
    shell.echo("Valid XML");
  }
} else {
  shell.echo('XML Validation requires "xmllint".');
}

fs.writeFile("dbJasmin.json", "", function () {
  console.log("Emptied contents of the database");
});

fs.readFile(args.source, "utf8", function (err, data) {
  let searchString = "<AuditFile xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns=\"urn:OECD:StandardAuditFile-Tax:PT_1.04_01\">";
    let re = new RegExp("^.*" + searchString + ".*$", "gm");
    let formatted = data.replace(re, "<AuditFile  xmlns=\"urn:OECD:StandardAuditFile-Tax:PT_1.04_01\">");

  fs.writeFileSync(args.source, formatted, "utf8", function (err) {
  });

  console.log("changed line!");
  console.log(formatted);

  for (var i = 0; i < 10000; i++){

  }

});

//Read and parse XML file contents
read(args.source, (err, buffer) => {

  console.log(args.source);

  const string = parser.toJson(buffer);

  const json = JSON.parse(string);

  const parsed = parseContents(json);

  fs.writeFile("dbJasmin.json", parsed, (err) => {
    if (err) {
      throw err;
    }
    console.log("JSON data is saved.");
  });
});

const parseContents = (json) => {
  let parsed = json["AuditFile"];

  // Delete unused and conflicting keys
  delete parsed["xmlns:xsi"];
  delete parsed["xmlns:xsd"];
  delete parsed["xsi:schemaLocation"];
  delete parsed["xmlns"];

  let MasterFiles = parsed.MasterFiles;
  delete parsed.MasterFiles;

  return JSON.stringify(parsed);
};
