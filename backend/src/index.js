import commandLineArgs from "command-line-args";

const optionDefinitions = [
  {
    name: "source",
    alias: "s",
    type: String,
    defaultValue: "SAFT_Sample_Accounting_2019.xml",
  },
];

const options = commandLineArgs(optionDefinitions);

export default options;
