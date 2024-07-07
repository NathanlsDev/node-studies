const inquirer = require("inquirer");
const chalk = require("chalk");

const { checkAccount, validAmount } = require("../helpers/validationUtils");
const { removeAmount } = require("../helpers/accountUtils");

const withdraw = () => {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "What is the name of your account?",
      },
    ])
    .then(({ accountName }) => {
      if (!checkAccount(accountName)) {
        return withdraw();
      }

      inquirer
        .prompt([
          {
            name: "amount",
            message: "How much do you want to withdraw?",
          },
        ])
        .then(({ amount }) => {
          if (!validAmount(amount)) {
            console.log(chalk.red("\nInvalid value, please try again.\n"));
            return withdraw();
          }
          removeAmount(accountName, amount);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

module.exports = { withdraw };
