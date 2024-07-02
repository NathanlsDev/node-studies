const fs = require("fs");

fs.rename("log.txt", "test.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File renamed!");
});