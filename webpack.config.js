// var path = require('path');
// var Promise = require('es6-promise');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// const TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  devtool: false,
  entry: {
    bundle: './app/main.js',
    vendor: [
      'animate.css',
      'antd',
      'react-router',
      'react',
      'react-dom',
    ],
  },
  devServer: {
    contentBase: '', //静�?�资源的目录 相对路径,相对于当前路��? 默认为当前config��?在的目录
    devtool: 'eval',
    hot: true, //自动刷新
    inline: true,
    port: 3005,
  },
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
      test: /\.(jpg|png)$/,
      loader: 'url?limit=8192',
    }, {
      test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
      loader: 'url-loader?limit=50000&name=[path][name].[ext]',
    }, {
      test: /\.(js|jsx)$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
    }],
  },
  plugins: [
    // 把指定文件夹下的文件复制到指定的目录
    // new TransferWebpackPlugin([{
    //   from: './public/public/images/',
    //   to: './public/images/',
    // }]),
    new webpack.optimize.CommonsChunkPlugin('vendor', '/public/javascripts/vendor.js'),
    new HtmlWebpackPlugin({
      template: './app/template.html',
      filename: 'index.html',
      inject: 'body',
    }),
    // new webpack.HotModuleReplacementPlugin(), //这个好像也是必须的，虽然我还没搞懂它的作��?
    // new webpack.NoErrorsPlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
  ],
};
