const path = require('path');

module.exports = {
  mode: 'development',
  entry: './dev/main.js',
  output: {
    path: __dirname,
    filename: 'output.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve('./dist/loader.js'),
          }
        ]
      }
    ]
  }
};