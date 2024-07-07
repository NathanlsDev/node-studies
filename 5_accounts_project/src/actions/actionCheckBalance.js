const inquirer = require("inquirer");
const chalk = require("chalk");

const { checkAccount } = require("../helpers/validationUtils");
const { getAccount } = require("../helpers/accountUtils");

const checkBalance = () => {
  const { operation } = require("../../menu");
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Which account would you like to consult the balance?",
      },
    ])
    .then(({ accountName }) => {
      if (!checkAccount(accountName)) {
        return checkBalance();
      }

      const accountData = getAccount(accountName);
      console.log(
        chalk.bgGreen.white(
          `\nHello ${accountName}, The balance of your account is $${accountData.balance}\n`
        )
      );
      return operation();
    })
    .catch((err) => console.log(err));
};

module.exports = { checkBalance };
