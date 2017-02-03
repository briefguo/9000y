const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');

module.exports = {
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, '/dist'),
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
