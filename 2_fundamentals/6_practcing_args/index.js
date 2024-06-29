//externo
const minimist = require("minimist");
//local
const moduleSum = require("./sum").sum;

const args = minimist(process.argv.slice(2));
const a = Number(args["a"]);
const b = Number(args["b"]);

console.log(moduleSum(a, b));
