import { loadEnvConfig } from "@next/env";

const setupJest = async () => {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);
};

export default setupJest;
