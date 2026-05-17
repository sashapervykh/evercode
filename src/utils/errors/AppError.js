class AppError extends Error {
  constructor(code = "APP_ERROR", message, requestId) {
    super(message);
    this.code = code;
    this.requestId = requestId;
  }
}

module.exports = AppError;
