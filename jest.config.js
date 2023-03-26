const ignorePatterns = ["<rootDir>/dist/", "<rootDir>/node_modules/"];

export default {
  testEnvironment: "node",
  coveragePathIgnorePatterns: ignorePatterns,
  testPathIgnorePatterns: ignorePatterns,
  transform: { "^.+\\.(t|j)sx?$": ["@swc/jest"] },
  moduleNameMapper: { "(.+)\\.js": "$1" },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  coverageThreshold: { global: { branches: 100, functions: 100, lines: 100, statements: 100 } },
};
