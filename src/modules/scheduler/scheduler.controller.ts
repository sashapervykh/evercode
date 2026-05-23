import { logger } from "../../utils/logger/logger.js";
import { scheduleTask } from "./scheduler.service.js";

export function startScheduler() {
  logger.info("Scheduler started");
  scheduleTask("Running Task", 10000, () => logger.info("running"));
}
