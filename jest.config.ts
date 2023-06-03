module.exports = {
  preset: 'ts-jest',
  testMatch: ["**/__tests__/**/*.(spec|test).[jt]s?(x)"],
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup-jest.ts'],
  testEnvironment: 'jsdom',
};