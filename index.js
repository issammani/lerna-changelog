const execa = require("execa");

console.log(execa.sync("ls", ["-a", "-l"]));
module.exports = require("./lib");
