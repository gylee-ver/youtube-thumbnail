const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // next.config.js와 .env 파일이 있는 디렉토리
  dir: './',
})

// Jest에 추가할 커스텀 설정
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  collectCoverageFrom: [
    'components/**/*.{js,jsx,ts,tsx}',
    'app/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  testMatch: [
    '**/__tests__/**/*.test.{js,jsx,ts,tsx}',
  ],
}

// createJestConfig는 next/jest가 제공하는 설정을 사용하여 Jest 설정을 생성합니다
module.exports = createJestConfig(customJestConfig) 