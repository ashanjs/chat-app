module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.svg$': require.resolve('./test/image-mock.js'),
    '\\.scss$': require.resolve('./test/style-mock.js'),
  },
}
