const webpack = require("webpack")

/** @type {Parameters<typeof webpack>[0][0]} */
module.exports = {
  entry: './src/main.js',
  output: {
      path: __dirname + '/dist',
      filename: 'main.js',
  }
};