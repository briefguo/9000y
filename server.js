const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

const devConfig = {
  devServer: {
    hot: true,
  },
  entry: ['webpack-hot-middleware/client', './app/index.js'],
  output: {
    filename: 'bundle_[hash].js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/dist/',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './entry.html' }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
var compiler = webpack(devConfig);

var app = express();

app.use(webpackMiddleware(compiler, {
  // options
  stats: {
    colors: true,
  },
  serverSideRender: true,
}));

module.exports = app;
