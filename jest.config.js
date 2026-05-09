/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.ts'],
    verbose: true,
    forceExit: true,
    clearMocks: true,
    resetModules: true,
    restoreMocks: true,
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { useESM: false }],
    },
    transformIgnorePatterns: [
        'node_modules/(?!(uuid)/)',
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
};
