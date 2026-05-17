const { logger } = require("../utils/logger/logger");
const scheduleTask = require("../services/scheduler.service");

function startScheduler() {
  logger.info("Scheduler запущен");
  scheduleTask("running", 10000, () => logger.info("running"));
}

module.exports = startScheduler;
