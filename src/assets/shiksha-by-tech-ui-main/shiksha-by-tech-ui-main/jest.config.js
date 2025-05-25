module.exports = {
  testEnvironment: "jest-environment-jsdom", // Sets up JSDOM for testing
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest", // Transforms TypeScript and JavaScript files using Babel
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mocks CSS imports
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], // Points to setupTests.ts
  testPathIgnorePatterns: ["/node_modules/", "/dist/"], // Ignores node_modules and dist during tests
};
