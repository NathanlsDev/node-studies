const inquirer = require("inquirer");

const { validAccountName } = require("../helpers/validationUtils");

const createAccount = () => {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Enter a name for your account:",
      },
    ])
    .then(({ accountName }) => {
      validAccountName(accountName);
    })
    .catch((err) => console.log(err));
};

module.exports = { createAccount };
