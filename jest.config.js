// eslint-disable-next-line no-undef
module.exports = {
  // Indicates the root directory of your code
  roots: ["<rootDir>/src"],

  // Test file patterns
  testMatch: ["**/__tests__/**/*.test.js", "**/__tests__/**/*.spec.js"],

  // File extensions for tests
  moduleFileExtensions: ["js", "json", "jsx", "node"],

  // Code coverage report settings
  collectCoverage: true,
  coverageDirectory: "coverage",

  // Add additional setup files before running tests
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
