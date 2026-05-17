module.exports = {
  testEnvironment: "node",
  clearMocks: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.js"],
  coverageReporters: ["text", "lcov", "html"],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 60,
      functions: 60,
      lines: 60,
    },
  },
};
