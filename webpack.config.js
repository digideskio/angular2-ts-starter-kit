var webpack = require('webpack');

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    root: './src',
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
  },
  module: {
    loaders: [
      { test: /\.ts(X?)$/, loader: 'babel-loader!ts-loader' }
    ]
  }
};