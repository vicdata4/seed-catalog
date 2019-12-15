module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      {
        pattern: 'components/tests/*.js',
        type: 'module'
      }
    ],
    exclude: [
      'node_modules/@*/**'
    ],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],
    autoWatch: false,
    singleRun: true,
    // singleRun: false, // Karma captures browsers, runs the tests and exits
    concurrency: Infinity
  });
};
