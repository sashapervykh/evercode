const AppError = require("./AppError");

class ValidationError extends AppError {
  constructor(message, requestId) {
    super("VALIDATION_ERROR", message, requestId);
  }
}

module.exports = ValidationError;
