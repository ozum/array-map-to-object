const ignorePatterns = ["<rootDir>/dist/", "<rootDir>/node_modules/", "<rootDir>/test-helper/"];

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  coveragePathIgnorePatterns: ignorePatterns,
  testPathIgnorePatterns: ignorePatterns,
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { diagnostics: { ignoreCodes: ["TS151001"] } }],
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
