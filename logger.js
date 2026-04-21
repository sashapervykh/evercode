const { appName } = require("./config");

function log(message) {
  console.log(`[${appName}]: ${message}`);
}

module.exports = log;
