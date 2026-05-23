import { logger } from "../utils/logger/logger.js";
import { scheduleTask } from "../services/scheduler.service.js";

function startScheduler() {
  logger.info("Scheduler started");
  scheduleTask("Running Task", 10000, () => logger.info("running"));
}
