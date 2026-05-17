function scheduleTask(name, interval, task) {
  setInterval(task, interval);
}

module.exports = scheduleTask;
