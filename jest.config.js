const ignorePatterns = ["<rootDir>/dist/", "<rootDir>/node_modules/"];

export default {
  preset: "ts-jest",
  moduleNameMapper: { "^(\\.{1,2}/.*)\\.js$": "$1" },
  transform: { "^.+\\.tsx?$": ["ts-jest", { useESM: true }] },
  coveragePathIgnorePatterns: ignorePatterns,
  testPathIgnorePatterns: ignorePatterns,
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  coverageThreshold: { global: { branches: 100, functions: 100, lines: 100, statements: 100 } },
};
