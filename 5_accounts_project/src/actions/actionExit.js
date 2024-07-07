const chalk = require("chalk");

const exit = () => {
  console.log(chalk.bgBlue.black("\nThanks for using Accounts\n"));
  process.exit();
};

module.exports = { exit };
