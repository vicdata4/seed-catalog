const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  mode: 'production',
  output: {
    filename: 'seed-bundle.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
