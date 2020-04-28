module.exports = {
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js',
  },
  moduleFileExtensions: ['js'],
  modulePaths: ['./src', './'],
  testPathIgnorePatterns: ['node_modules'],
  transformIgnorePatterns: ['node_modules/.*'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: 'http://localhost:3000',
  setupFiles: ['<rootDir>/loadershim.js', '<rootDir>/jest-globals.js'],
  setupFilesAfterEnv: ['<rootDir>/jest-setupTests.js'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!src/**/*.spec.js'
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text-summary'],
};
