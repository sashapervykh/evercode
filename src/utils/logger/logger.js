const { appName, loggerLevel } = require("../../config/config");

const LEVELS = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
  trace: 4,
};

class Logger {
  #currentLevel;
  #loggerName;

  constructor(level = loggerLevel, loggerName = appName) {
    this.#currentLevel = level;
    this.#loggerName = loggerName;
  }

  #format(level, message, options = {}) {
    const time = `${new Date().toISOString()}:`;
    const finalMessageParts = [
      time,
      `[${this.#loggerName}]`,
      `[${level}]`,
      `[${message}]`,
    ];
    if (options.requestId) {
      finalMessageParts.push(`[requestId=${options.requestId}]`);
    }
    return finalMessageParts.join(" ");
  }

  #log(level, message, options) {
    if (!this.#shouldLog(level)) return;
    const formattedMessage = this.#format(level, message, options);

    switch (level) {
      case "error": {
        console.error(formattedMessage);
        break;
      }
      case "warn": {
        console.warn(formattedMessage);
        break;
      }
      default: {
        console.log(formattedMessage);
      }
    }
  }

  #shouldLog(level) {
    return LEVELS[this.#currentLevel] >= LEVELS[level];
  }

  error(message, options) {
    this.#log("error", message, options);
  }
  warn(message, options) {
    this.#log("warn", message, options);
  }
  info(message, options) {
    this.#log("info", message, options);
  }
  debug(message, options) {
    this.#log("debug", message, options);
  }
  trace(message, options) {
    this.#log("trace", message, options);
  }
}

const logger = new Logger();

module.exports = { logger, Logger };
