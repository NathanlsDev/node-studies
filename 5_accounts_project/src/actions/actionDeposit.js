const inquirer = require("inquirer");
const chalk = require("chalk");

const { checkAccount, validAmount } = require("../helpers/validationUtils");
const { addAmount } = require("../helpers/accountUtils");

const deposit = () => {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "What is the name of your account?",
      },
    ])
    .then(({ accountName }) => {
      if (!checkAccount(accountName)) {
        return deposit();
      }

      inquirer
        .prompt([
          {
            name: "amount",
            message: "How much do you want to deposit?",
          },
        ])
        .then(({ amount }) => {
          if (!validAmount(amount)) {
            console.log(chalk.red("\nInvalid value, please try again.\n"));
            return deposit();
          }
          addAmount(accountName, amount);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

module.exports = { deposit };
