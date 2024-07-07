const chalk = require("chalk");
const fs = require("fs");

const buildAcc = (accountName) => {
  const { createAccount } = require("../actions/actionCreateAccount");
  const { operation } = require("../../menu");

  if (!fs.existsSync("accounts")) {
    fs.mkdirSync(`./accounts`);
  }

  if (fs.existsSync(`./accounts/${accountName}.json`)) {
    console.log(
      chalk.bgRed.black("\nError this user account already exists!\n")
    );
    return createAccount();
  }

  fs.writeFileSync(
    `./accounts/${accountName}.json`,
    '{ "balance": 0 }',
    (err) => {
      console.log(err);
    }
  );

  console.log(
    chalk.green(`\nCongratulations ${accountName}, your account was created!\n`)
  );

  return operation();
};

const addAmount = (accountName, amount) => {
  const { operation } = require("../../menu");

  const accountData = getAccount(accountName);

  accountData.balance = Number(amount) + Number(accountData.balance);

  fs.writeFileSync(
    `./accounts/${accountName}.json`,
    JSON.stringify(accountData),
    (err) => console.log(err)
  );

  console.log(
    chalk.green(`\nDeposit amount $${amount} successfully performed!\n`)
  );

  return operation();
};

const getAccount = (accountName) => {
  const accountJSON = fs.readFileSync(`./accounts/${accountName}.json`, {
    encoding: "utf8",
    flag: "r",
  });
  return JSON.parse(accountJSON);
};

const removeAmount = (accountName, amount) => {
  const { operation } = require("../../menu");
  const { withdraw } = require("../actions/actionWithdraw");

  const accountData = getAccount(accountName);

  if (accountData.balance < amount) {
    console.log(
      chalk.bgRed("\nThe balance of your account is insufficient!\n")
    );
    return withdraw();
  }

  accountData.balance = Number(accountData.balance) - Number(amount);

  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    (err) => {
      console.log(err);
    }
  );

  console.log(
    chalk.green(`\nThe withdrawal of $${amount} was performed successfully!\n`)
  );

  operation();
};

module.exports = { buildAcc, addAmount, getAccount, removeAmount };
