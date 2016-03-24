module.exports = {
  entry: './main.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }]
  }
};
