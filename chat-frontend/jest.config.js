const path = require('path')

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', path.join(__dirname, 'test')],
  moduleNameMapper: {
    '\\.svg$': require.resolve('./test/image-mock.js'),
    '\\.scss$': require.resolve('./test/style-mock.js'),
  },
  collectCoverageFrom: ['**/src/**/*.js']
}
