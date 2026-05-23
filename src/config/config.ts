export const CONFIG = {
  appName: "Evercode Test Task",
  port: Number(process.env.PORT) || 3000,
  env: process.env.NODE_ENV ?? "development",
  loggerLevel: process.env.LOGGER_LEVEL ?? "INFO",
};
