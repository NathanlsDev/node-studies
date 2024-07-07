const inquirer = require("inquirer");
const chalk = require("chalk");

const { createAccount } = require("./src/actions/actionCreateAccount");
const { checkBalance } = require("./src/actions/actionCheckBalance");
const { withdraw } = require("./src/actions/actionWithdraw");
const { deposit } = require("./src/actions/actionDeposit");
const { exit } = require("./src/actions/actionExit");

const operation = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: ["Create account", "Balance", "Deposit", "Withdraw", "Exit"],
      },
    ])
    .then((answer) => {
      const action = answer["action"];
      const handleActions = {
        "Create account": createAccount,
        Balance: checkBalance,
        Withdraw: withdraw,
        Deposit: deposit,
        Exit: exit,
      };
      return handleActions[action]();
    })
    .catch((err) => console.log(err));
};

const greetings = () => {
  console.log(chalk.bgGreen.black("\nThanks for choosing our bank!"));
  console.log(chalk.green("Chose an options below:\n"));
};

module.exports = { operation, greetings };
