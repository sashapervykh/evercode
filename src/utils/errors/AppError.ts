export class AppError extends Error {
  code: string;
  requestId: string | undefined;

  constructor(code = "APP_ERROR", message: string, requestId?: string) {
    super(message);
    this.code = code;
    this.requestId = requestId;
  }
}
