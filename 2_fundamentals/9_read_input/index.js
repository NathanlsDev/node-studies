const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("What is your favorite language?\n", (language) => {
  console.log(`My favorite language is: ${language}`);
  readline.close();
});
