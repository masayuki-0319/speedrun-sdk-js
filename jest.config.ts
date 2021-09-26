/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  clearMocks: true,
  coverageProvider: "v8",
  testMatch: [
    "**/__tests__/**/*.+(ts|js)",
  ],
};

export default config;
