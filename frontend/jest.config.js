const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

// Pin mock-mode env so snapshot tests render deterministic UI
process.env.NEXT_PUBLIC_USE_CONTRACT_MOCK = "true";

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.tsx"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/__tests__/**/*.test.{ts,tsx}"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(isomorphic-dompurify|dompurify|@exodus|uuid|@react-pdf|@react-pdf/renderer|react-pdf)/)",
  ],
};

module.exports = createJestConfig(customJestConfig);
