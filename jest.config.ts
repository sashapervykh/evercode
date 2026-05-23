// jest.config.ts
import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest/presets/default-esm", // ESM preset
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "./tsconfig.jest.json" }],
  },
};

export default config;

// export default defineConfig({
//   testEnvironment: "node",
//   clearMocks: true,
//   preset: "ts-jest/presets/default-esm",
//   coverageDirectory: "coverage",
//   collectCoverageFrom: ["src/**/*.ts"],
//   coverageReporters: ["text", "lcov", "html"],
//   moduleNameMapper: {
//     "^(\\.{1,2}/.*)\\.js$": "$1",
//   },
//   transform: {
//     "^.+\\.tsx?$": [
//       "ts-jest",
//       {
//         useESM: true,
//       },
//     ],
//   },
//   extensionsToTreatAsEsm: [".ts"],
//   testMatch: ["**/tests/**/*.test.ts", "**/tests/**/*.spec.ts"],
//   coverageThreshold: {
//     global: {
//       statements: 70,
//       branches: 60,
//       functions: 60,
//       lines: 60,
//     },
//   },
// });
