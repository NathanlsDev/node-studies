const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");

operation();
function operation() {
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
        "Create account": greetingsAcc,
        Balance: checkBalance,
        Deposit: deposit,
        Withdraw: withdraw,
        Exit: exit,
      };
      handleActions[action]();
    })
    .catch((err) => console.log(err));
}

function greetingsAcc() {
  console.log(chalk.bgBlueBright.black("Thanks for choosing our bank!"));
  console.log(chalk.bgGreen.black("Set the options of your account next\n"));
  createUserAcc();
}

function createUserAcc() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Enter a name for your account:\n",
      },
    ])
    .then(({ accountName }) => {
      userNameValidation(accountName);
    })
    .catch((err) => console.log(err));
}

function userNameValidation(accountName) {
  if (accountName) {
    const pattern = /^(?!^ )[a-zA-Z0-9]{3,}( [a-zA-Z0-9]+)*$/;
    const isAValidAcc = pattern.test(accountName);
    return isAValidAcc ? buildAcc(accountName) : invalidUser();
  }
  invalidUser();
}

function invalidUser() {
  console.log(chalk.bgRed("Invalid name try again!\n"));
  createUserAcc();
}

function buildAcc(accountName) {
  if (fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(
      chalk.bgYellowBright.black("This user account already exists!\n")
    );
    createUserAcc();
    return;
  }

  checkAccRegistry();
  fs.writeFileSync(`accounts/${accountName}.json`, `"{balance: 0}"`, (err) => {
    console.log(err);
  });
  successfulAccCreatedMsg(accountName);
}

function successfulAccCreatedMsg(accountName) {
  console.log(
    chalk.bgGreen.black(
      `Congratulations ${accountName}, your account was created!\n`
    )
  );
  operation();
}

function checkAccRegistry() {
  if (!fs.existsSync("accounts")) {
    fs.mkdirSync("accounts");
  }
}

function checkBalance() {
  console.log("checkBalance aqui");
  operation();
}

async function deposit() {
  try {
    const accounts = await getAccounts();
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "accountName",
        message: "What is the name of your account?",
        choices: accounts,
      },
    ]);
    console.log(answers);//implementar seleção de contas
  } catch (err) {
    console.log(err);
  }
}

function getAccounts() {
  return new Promise((resolve, reject) => {
    fs.readdir(`./accounts/`, (err, data) => {
      if (err) {
        console.error(chalk.bgRed("There are no registered accounts!"));
        operation();
      } else {
        const registredAccounts = data.map((account) => account.split(".")[0]);
        resolve(registredAccounts);
      }
    });
  });
}

function withdraw() {
  console.log("withdraw aqui");
  operation();
}
function exit() {
  console.log(
    chalk.bgMagentaBright.greenBright("\nThanks for using Accounts!\n")
  );
  process.exit();
}
