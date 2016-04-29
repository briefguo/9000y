const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  entry: './src/entry/index.js',
  output: {
    path: './build',
    filename: 'bundle.js',
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
      loader: 'url-loader?limit=8192&name=[path][name]_[hash].[ext]',
    }, {
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
    }],
  },
  // Server Configuration options
  devServer: {
    contentBase: '', // 静态资源的目录 相对路径,相对于当前路径 默认为当前config所在的目录
    devtool: 'eval',
    hot: true, // 自动刷新
    inline: true,
    port: 3005,
  },
  devtool: 'eval',

  plugins: [ // 把指定文件夹下的文件复制到指定的目录
    new TransferWebpackPlugin([{
      from: './src/component/',
      to: './template/',
    }]),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: 'head',
    }),
    new webpack.HotModuleReplacementPlugin(),

    // 这个好像也是必须的，虽然我还没搞懂它的作用

    new webpack.NoErrorsPlugin(),
  ],
};
