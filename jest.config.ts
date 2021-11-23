import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  watchPlugins: [
    require.resolve('jest-watch-typeahead/filename'),
    require.resolve('jest-watch-typeahead/testname')
  ],
  snapshotSerializers: [
    require.resolve('jest-serializer-path'),
    require.resolve('jest-snapshot-serializer-raw/always')
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  roots: ['<rootDir>/src']
};

export default config;
