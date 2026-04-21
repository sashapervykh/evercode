const log = require("./logger");

log("Scheduler запущен");

function scheduleTask(name, interval, task) {
  setInterval(task, interval);
}

scheduleTask("running", 10000, () => log("running"));
