const ignorePatterns = ["<rootDir>/dist/", "<rootDir>/node_modules/"];

module.exports = {
  testEnvironment: "node",
  coveragePathIgnorePatterns: ignorePatterns,
  testPathIgnorePatterns: ignorePatterns,
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  coverageThreshold: { global: { branches: 100, functions: 100, lines: 100, statements: 100 } },
};
