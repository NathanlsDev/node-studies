const fs = require("fs");

console.log("Beginning");

fs.writeFile("testAsync.txt", "world", (err) => {
  setTimeout(() => {
    console.log("File created!");
  }, 1500);
});

console.log("finish");
