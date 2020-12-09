import parser from "xml2json";
import arg from "./index.js";
import read from "read-file";
import writeFile from "write";
import shell from "shelljs";

if (shell.which("xmllint")) {
  shell.echo("Validating XML file " + arg.source);
  let r = shell.exec(
    "xmllint --noout --schema SAFTPT1.04_011.xsd " + arg.source
  );
  if (r.code !== 0) {
    shell.echo("XML not valid!");
  } else {
    shell.echo("Valid XML!");
  }

} else {
  shell.echo('XML Validation requires "xmllint".');
}

read(arg.source, (err, buffer) => {

  const fileString = parser.toJson(buffer);
  const parsedFile = parseContents(JSON.parse(fileString));

  writeFile.promise("db.json", parsedFile).then(function () {
    
  });
});
