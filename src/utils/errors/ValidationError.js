const AppError = require("./AppError");

class ValidationError extends AppError {
  constructor(message, requestId) {
    super(message, requestId, "VALIDATION_ERROR");
  }
}

module.exports = ValidationError;
