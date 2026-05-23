const AppError = require("../utils/errors/AppError");
const ValidationError = require("../utils/errors/ValidationError");
const { logger } = require("../utils/logger/logger");

export default function scheduleTask(name, interval, task) {
  if (!name || typeof name !== "string") {
    throw new ValidationError(
      "Task name should be provided as non-empty string to scheduler",
    );
  }
  if (typeof interval !== "number" || Number.isNaN(interval) || interval < 0) {
    throw new ValidationError(
      "Task interval should be provided as a positive number",
    );
  }
  if (typeof task !== "function") {
    throw new ValidationError("Scheduled task should be a function");
  }
  logger.info(`Scheduled task is ${name}`);
  setInterval(() => {
    try {
      task();
    } catch (error) {
      if (error instanceof AppError) {
        logger.error(`[Code ${error.code}]: ${error.message}`);
      } else {
        logger.error(`Unknown error happened while running scheduled task`);
      }
    }
  }, interval);
}
