const minimist = require("minimist");

const args = minimist(process.argv.slice(2));
// console.log(args);

const name = args["name"] || "User";
const job = args["job"] || "not empty";

console.log(`He is ${name} and work as a ${job}.`);
