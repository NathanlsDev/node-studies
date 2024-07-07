const chalk = require("chalk");
const fs = require("fs");

const validAccountName = (accountName) => {
  const { buildAcc } = require("../helpers/accountUtils");

  if (accountName) {
    const pattern = /^(?!^ )[a-zA-Z0-9]{3,}( [a-zA-Z0-9]+)*$/;
    const isAValidAcc = pattern.test(accountName);
    return isAValidAcc ? buildAcc(accountName) : invalidUser();
  }
  return invalidUser();
};

const invalidUser = () => {
  const { createAccount } = require("../actions/actionCreateAccount");

  console.log(chalk.bgRed("\nInvalid name try again!\n"));
  return createAccount();
};

const checkAccount = (accountName) => {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgYellow.black("\nAccount not found! Try again.\n"));
    return false;
  }
  return true;
};

const validAmount = (amount) => {
  const pattern = /^\d+(\.\d+)?$/;
  return (isAValidAmount = pattern.test(amount));
};

module.exports = { validAccountName, checkAccount, validAmount };
