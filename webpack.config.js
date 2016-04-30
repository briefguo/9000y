const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  entry: './src/entry/index.jsx',
  output: {
    path: './public',
    filename: './javascripts/bundle.js',
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
      loader: 'url-loader?limit=8192&name=images/[name]_[hash].[ext]',
    }, {
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
    }],
  },
  plugins: [ // 把指定文件夹下的文件复制到指定的目录
    // new TransferWebpackPlugin([{
    //   from: './public/public/images/',
    //   to: './public/images/',
    // }]),
    new HtmlWebpackPlugin({
      template: './src/entry/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    // new webpack.HotModuleReplacementPlugin(),

    // 这个好像也是必须的，虽然我还没搞懂它的作用

    // new webpack.NoErrorsPlugin(),
  ],
};
