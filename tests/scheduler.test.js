const scheduleTask = require("../src/services/scheduler.service");
const ValidationError = require("../src/utils/errors/ValidationError");

describe("scheduleTask", () => {
  test("should throw ValidationError if task name is empty", () => {
    expect(() => {
      scheduleTask("", 1000, () => {});
    }).toThrow(ValidationError);
  });
});
