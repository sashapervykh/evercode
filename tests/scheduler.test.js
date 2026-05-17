const scheduleTask = require("../src/services/scheduler.service");
const ValidationError = require("../src/utils/errors/ValidationError");

describe("scheduleTask", () => {
  test("should throw ValidationError if task name is empty", () => {
    expect(() => {
      scheduleTask("", 1000, () => {});
    }).toThrow(ValidationError);
  });
  test("should throw ValidationError if task name is not string", () => {
    expect(() => {
      scheduleTask(1, 1000, () => {});
    }).toThrow(ValidationError);
  });
  test("should throw ValidationError if task interval is not a number", () => {
    expect(() => {
      scheduleTask("Test task", "1000", () => {});
    }).toThrow(ValidationError);
  });
  test("should throw ValidationError if task interval is negative", () => {
    expect(() => {
      scheduleTask("Test task", -1000, () => {});
    }).toThrow(ValidationError);
  });
  test("should throw ValidationError if task interval is NaN", () => {
    expect(() => {
      scheduleTask("Test task", NaN, () => {});
    }).toThrow(ValidationError);
  });
  test("should throw ValidationError if task is not a function", () => {
    expect(() => {
      scheduleTask("Test task", NaN, "task");
    }).toThrow(ValidationError);
  });
  test("should log schedule task", () => {
    jest.spyOn(console, "log").mockImplementation(() => {});
    jest.useFakeTimers();
    const task = jest.fn();
    scheduleTask("Test task", 1000, task);
    jest.advanceTimersByTime(1000);
    expect(task).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(1000);
    expect(task).toHaveBeenCalledTimes(2);
    jest.useRealTimers();
  });
});
