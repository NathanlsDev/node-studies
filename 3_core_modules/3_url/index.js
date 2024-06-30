const url = require("url");
const address = "https://gg.deals/search/?title=skyrim";
const parsedUrl = new url.URL(address);

console.log("\nhost:", parsedUrl.host);
console.log("\npathName:", parsedUrl.pathname);
console.log("\nsearch:", parsedUrl.search);
console.log("\nsearchParams:", parsedUrl.searchParams);
console.log("\nsearchParams.Get:", parsedUrl.searchParams.get("title"));
