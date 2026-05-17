class AppError extends Error {
  constructor(message, code, requestId) {
    super(message);
    this.code = code;
    this.requestId = requestId;
  }
}

modules.exports = AppError;
