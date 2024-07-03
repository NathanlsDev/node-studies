const fs = require("fs");

if (!fs.existsSync("./myFolder")) {
  console.log("This directory doesn't exists");
  fs.mkdirSync("myFolder");
} else {
  console.log("Directory exists");
}


