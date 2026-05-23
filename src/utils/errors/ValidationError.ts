import { AppError } from "./AppError.js";

export class ValidationError extends AppError {
  constructor(message: string, requestId?: string) {
    super("VALIDATION_ERROR", message, requestId);
  }
}
