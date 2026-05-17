const log = require("../utils/logger/logger");
const scheduleTask = require("../services/scheduler.service");

function startScheduler() {
  log("Scheduler запущен");
  scheduleTask("running", 10000, () => log("running"));
}

module.exports = startScheduler;
