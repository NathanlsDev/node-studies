const fs = require("fs"); // file system

fs.readFile("./test.txt", "utf8", (err, data) =>
  err ? console.log(err) : console.log(data)
);
