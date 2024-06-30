const fs = require("fs");

console.log("Beginning");

fs.writeFileSync("test.txt", "hello");

console.log("finish");
