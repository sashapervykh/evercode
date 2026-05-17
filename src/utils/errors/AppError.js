class AppError extends Error {
  constructor(message, requestId, code = "APP_ERROR") {
    super(message);
    this.code = code;
    this.requestId = requestId;
  }
}

module.exports = AppError;
