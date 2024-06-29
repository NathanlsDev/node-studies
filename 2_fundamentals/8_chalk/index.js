const minimist = require("minimist");
const chalk = require("chalk");

const args = minimist(process.argv.slice(2));
const grade = Number(args["grade"]);

console.log(
  grade >= 7
    ? chalk.green.bold("Congratulations!You are approved")
    : chalk.bgRed.bold("You are disapproved.")
);
