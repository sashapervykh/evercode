import { AppError } from "./AppError.js";

class ScheduledTaskError extends AppError {
  constructor(message: string, requestId: string) {
    super("SCHEDULED_TASK_ERROR", message, requestId);
  }
}
