import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  testEnvironment: 'node',
  testMatch: ['**/*.spec.(t|j)s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc-node/jest',
      {
        jsc: {
          minify: false
        }
      }
    ]
  },
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
  coverageProvider: 'v8',
  coverageReporters: ['text']
}

export default config