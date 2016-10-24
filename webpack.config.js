var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: '#eval-source-map',
  entry: './src/main.js',
  output: {
    publicPath: "/dist/",
    path: path.join(__dirname, './dist'),
    filename: "bundle.js"
   },
  module: {
    loaders: [
      {
        test: /.(jsx|js)?$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  },
};

// query: {
  // presets: ['es2015', ['stage-0'],'react']
// }
