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
      console.log(action);

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
  console.log(chalk.bgGreen.black("Thanks for choosing our bank!"));
  console.log(chalk.green("Chose an options below:"));
};

const createAccount = () => {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite um nome para a sua conta:",
      },
    ])
    .then(({ accountName }) => {
      console.log(accountName);

      if (!fs.existsSync("accounts")) {
        fs.mkdirSync(`./accounts`);
      }

      if (fs.existsSync(`./accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black("Error his user already exists."));
        createAccount();
        return;
      }

      fs.writeFileSync(
        `./accounts/${accountName}.json`,
        '{"balance": 0}',
        (err) => {
          console.log(err);
        }
      );
      console.log(chalk.green("Congratulations, your account was created!"));
      operation();
    })
    .catch((err) => console.log(err));
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
          addAmount(accountName, amount);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

const checkAccount = (accountName) => {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgYellow.black("Account not found! Try again."));
    return false;
  }
  return true;
};

const addAmount = (accountName, amount) => {
  const accountData = getAccount(accountName);

  if (!amount) {
    console.log(chalk.red("An error has occurred, please try again."));
    return deposit();
  }

  accountData.balance = Number(amount) + Number(accountData.balance);

  fs.writeFileSync(
    `./accounts/${accountName}.json`,
    JSON.stringify(accountData),
    (err) => console.log(err)
  );
  console.log(chalk.green(`Deposit amount $${amount} successfully performed!`));
  operation();
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
          `Hello ${accountName}, The balance of your account is $${accountData.balance}`
        )
      );
    })
    .catch((err) => console.log(err));
};

const withdraw = () => {
  
};

const exit = () => {
  console.log(chalk.bgBlue.black("Thanks for using Accounts"));
  process.exit();
};

greetings();
operation();
