const path = require("path");

const absolutePath = path.resolve("test.txt");
console.log(absolutePath);


const midfolder = "reports";
const filename = "jun-2024.xlsx";
const finalPath = path.join("/", "files", midfolder, filename);
console.log(finalPath);
