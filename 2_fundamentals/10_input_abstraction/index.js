const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "Q1",
      message: "What is the first note?",
    },
    {
      name: "Q2",
      message: "What is the second note?",
    },
  ])
  .then(({ Q1, Q2}) => {
    console.log({ Q1, Q2});
    const average = (Number(Q1) + Number(Q2)) / 2;
    console.log(average);
  })
  .catch((err) => console.log(err));
