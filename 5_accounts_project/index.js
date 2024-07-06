const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");

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
        Deposit: deposit,
        Withdraw: withdraw,
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

const validAccountName = (accountName) => {
  if (accountName) {
    const pattern = /^(?!^ )[a-zA-Z0-9]{3,}( [a-zA-Z0-9]+)*$/;
    const isAValidAcc = pattern.test(accountName);
    return isAValidAcc ? buildAcc(accountName) : invalidUser();
  }
  return invalidUser();
};

const invalidUser = () => {
  console.log(chalk.bgRed("\nInvalid name try again!\n"));
  return createAccount();
};

const buildAcc = (accountName) => {
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
          validAmount(accountName, amount, addAmount, deposit);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

const checkAccount = (accountName) => {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgYellow.black("\nAccount not found! Try again.\n"));
    return false;
  }
  return true;
};

const validAmount = (accountName, amount, nextAction, backToOrigin) => {
  if (amount) {
    const pattern = /^\d+(\.\d+)?$/;
    const isAValidAmount = pattern.test(amount);
    return isAValidAmount
      ? nextAction(accountName, amount)
      : invalidAmount(backToOrigin);
  }
  return invalidAmount(backToOrigin);
};

const invalidAmount = (backToOrigin) => {
  console.log(chalk.red("\nInvalid value, please try again.\n"));
  return backToOrigin();
};

const addAmount = (accountName, amount) => {
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

const checkBalance = () => {
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
        chalk.bgBlue.white(
          `\nHello ${accountName}, The balance of your account is $${accountData.balance}\n`
        )
      );
      return operation();
    })
    .catch((err) => console.log(err));
};

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
          validAmount(accountName, amount, removeAmount, withdraw);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

const removeAmount = (accountName, amount) => {
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

const exit = () => {
  console.log(chalk.bgBlue.black("\nThanks for using Accounts\n"));
  process.exit();
};

greetings();
operation();
