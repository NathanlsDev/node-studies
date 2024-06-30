const chalk = require("chalk");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "Q1",
      message: "What's your name? \n",
    },
    {
      name: "Q2",
      message: "What's your age? \n",
    },
  ])
  .then(({ Q1, Q2 }) => {
    console.log(
      chalk.bgYellow.black(`Your name is ${Q1} and you are ${Q2} years old!`)
    );
  })
  .catch((err) => {
    console.log(err);
  });
