import type { Config } from "jest";

const config: Config = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  preset: "ts-jest",
  globalSetup: "<rootDir>/setup.ts",
};

export default config;
