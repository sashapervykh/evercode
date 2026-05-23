import { logger, Logger } from "../src/utils/logger/logger.js";

describe("logger", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should log info message", () => {
    const spy = jest.spyOn(console, "log").mockImplementation(() => {});
    logger.info("hello");
    expect(spy).toHaveBeenCalled();
  });
  test("should show error message", () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    logger.error("Error");
    expect(spy).toHaveBeenCalled();
  });
  test("should show warning", () => {
    const spy = jest.spyOn(console, "warn").mockImplementation(() => {});
    logger.warn("Warning");
    expect(spy).toHaveBeenCalled();
  });
  test("should not show messages for the lower level", () => {
    const testedLogger = new Logger("ERROR");
    const spy = jest.spyOn(console, "log").mockImplementation(() => {});
    testedLogger.info("Hello");
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });
  test("should include requestId in log", () => {
    const spy = jest.spyOn(console, "log").mockImplementation(() => {});

    logger.info("hello", {
      requestId: "123",
    });

    expect(spy).toHaveBeenCalledWith(expect.stringContaining("requestId=123"));
  });
});
