import { config } from "../../config/config.js";

const { appName, loggerLevel } = config;

const LEVELS = {
  ERROR: 0,
  WARN: 1,
  INFO: 2,
  DEBUG: 3,
  TRACE: 4,
};

const LEVEL_NAMES = {
  ERROR: "ERROR",
  WARN: "WARN",
  INFO: "INFO",
  DEBUG: "DEBUG",
  TRACE: "TRACE",
};

class Logger {
  #currentLevel: keyof typeof LEVELS;
  #loggerName;

  constructor(level = loggerLevel, loggerName = appName) {
    this.#currentLevel = level;
    this.#loggerName = loggerName;
  }

  #format(level: string, message: string, options?: { requestId?: string }) {
    const time = `${new Date().toISOString()}:`;
    const finalMessageParts = [
      time,
      `[${this.#loggerName}]`,
      `[${level}]`,
      `${message}`,
    ];
    if (options?.requestId) {
      finalMessageParts.push(`| requestId=${options.requestId}`);
    }
    return finalMessageParts.join(" ");
  }

  #log(level: string, message: string, options?: { requestId?: string }) {
    if (!this.#shouldLog(level)) return;
    const formattedMessage = this.#format(level, message, options);

    switch (level) {
      case LEVEL_NAMES.ERROR: {
        console.error(formattedMessage);
        break;
      }
      case LEVEL_NAMES.WARN: {
        console.warn(formattedMessage);
        break;
      }
      default: {
        console.log(formattedMessage);
      }
    }
  }

  #shouldLog(level: keyof typeof LEVELS) {
    return LEVELS[this.#currentLevel] >= LEVELS[level];
  }

  error(message: string, options?: { requestId?: string }) {
    this.#log(LEVEL_NAMES.ERROR, message, options);
  }
  warn(message: string, options?: { requestId?: string }) {
    this.#log(LEVEL_NAMES.WARN, message, options);
  }
  info(message: string, options?: { requestId?: string }) {
    this.#log(LEVEL_NAMES.INFO, message, options);
  }
  debug(message: string, options?: { requestId?: string }) {
    this.#log(LEVEL_NAMES.DEBUG, message, options);
  }
  trace(message: string, options?: { requestId?: string }) {
    this.#log(LEVEL_NAMES.TRACE, message, options);
  }
}

const logger = new Logger();

module.exports = { logger, Logger };
