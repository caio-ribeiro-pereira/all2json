module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'ts'
  ],
  verbose: true,
  rootDir: 'test',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  collectCoverageFrom: [
    '**/*.(t|j)s'
  ],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  resolver: 'jest-ts-webcompat-resolver'
}
