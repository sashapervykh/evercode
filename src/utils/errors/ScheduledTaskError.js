const AppError = require("./AppError");

class ScheduledTaskError extends AppError {
  constructor(message, requestId) {
    super("SCHEDULED_TASK_ERROR", message, requestId);
  }
}

module.exports = ScheduledTaskError;
