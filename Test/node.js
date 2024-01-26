const fs = require("fs");
let text = fs.readFileSync("text.txt", "utf-8");
console.log(text);
text = text.replace("morning", "evening");
console.log("Creating new file...");
fs.writeFileSync("NewText.txt", text);
console.log(text);
