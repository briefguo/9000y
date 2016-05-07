var path = require('path');
var Promise = require('es6-promise');
// var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// const TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './app/main.js',
  output: {
    path: __dirname,
    filename: '/public/javascripts/bundle.js',
    publicPath: '',
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css',
    }, {
      test: /\.less$/,
      loader: 'style!css!less',
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192&name=images/[name].[ext]',
    }, {
      test: /\.(js|jsx)$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
      include: __dirname
    }],
  },
  plugins: [ // 把指定文件夹下的文件复制到指定的目录
    // new TransferWebpackPlugin([{
    //   from: './public/public/images/',
    //   to: './public/images/',
    // }]),
    new HtmlWebpackPlugin({
      template: './views/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.HotModuleReplacementPlugin()

    // new webpack.HotModuleReplacementPlugin(),

    // 这个好像也是必须的，虽然我还没搞懂它的作用

    // new webpack.NoErrorsPlugin(),
  ],
};
