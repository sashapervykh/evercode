const { appName } = require("../../config/config");

function log(message) {
  console.log(`[${appName}]: ${message}`);
}

module.exports = log;
