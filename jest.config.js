const ignorePatterns = ["<rootDir>/dist/", "<rootDir>/node_modules/", "<rootDir>/test-helper/"];

module.exports = {
  // preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  coveragePathIgnorePatterns: ignorePatterns,
  testPathIgnorePatterns: ignorePatterns,
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  transform: {
    // "^.+\\.tsx?$": ["ts-jest", { diagnostics: { ignoreCodes: ["TS151001"] } }],
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
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
