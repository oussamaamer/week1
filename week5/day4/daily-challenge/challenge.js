const { greet } = require("./greeting");
const { showColorfulMessage } = require("./colorful-message");
const { readFileContent } = require("./read-file");

const userName = "Oussama";

console.log(greet(userName));
showColorfulMessage();
readFileContent();
