import nextJest from "next/jest";
import type { Config } from "jest";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  preset: "ts-jest",
};

export default createJestConfig(config);
