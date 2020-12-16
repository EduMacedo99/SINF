import parser from "xml2json";
import args from "./index.js";
import read from "read-file";
import shell from "shelljs";
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

// fs.writeFile("databases/db.json", "{}", function () {
//   console.log("Emptied contents of the database");
// });

//Read and parse XML file contents
read(args.source, (err, buffer) => {
    console.log(args.source);
  const string = parser.toJson(buffer);

  const json = JSON.parse(string);

  const parsed = parseContents(json);

  fs.writeFile("databases/db.json", parsed, (err) => {
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

  parsed = {
    ...parsed,
    ...MasterFiles,
  };

  let TaxTable = parsed.TaxTable;
  delete parsed.TaxTable;

  parsed = {
    ...parsed,
    ...TaxTable,
  };

  // parseSourceDocuments(parsed);

  return JSON.stringify(parsed);
};


const parseSourceDocuments = (obj) => {
  let SalesInvoices = obj.SourceDocuments.SalesInvoices;

  const { Invoice, NumberOfEntries, TotalDebit, TotalCredit } = SalesInvoices;

  obj.SalesInvoicesInfo = {
    NumberOfEntries,
    TotalDebit,
    TotalCredit,
  };

  obj.SalesInvoices = Invoice;

  if (!obj.SourceDocuments.MovementOfGoods) {
    delete obj.SourceDocuments;
    return;
  }

  let MovementOfGoods = obj.SourceDocuments.MovementOfGoods;

  const {
    NumberOfMovementLines,
    TotalQuantityIssued,
    StockMovement,
  } = MovementOfGoods;

  obj.StockMovementsInfo = {
    NumberOfMovementLines,
    TotalQuantityIssued,
  };

  obj.StockMovements = StockMovement;

  delete obj.SourceDocuments;
};
