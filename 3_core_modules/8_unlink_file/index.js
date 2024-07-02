const fs = require("fs");

fs.unlink("log.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File removed!");
});
