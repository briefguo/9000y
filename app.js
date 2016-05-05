var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var fs = require('fs');

var webpack = require('webpack');
// var webpackDevMiddleware = require('webpack-dev-middleware')
// var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')


var routes = require('./routes/index');
// var users = require('./routes/users');
// var routes = require('./app/routes');

import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'

var app = express();
// var compiler = webpack(config)


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
// app.use(webpackHotMiddleware(compiler))

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.post('/upload', multipart(), function(req, res) {
  //get filename
  var filename = req.files.files.originalFilename || path.basename(req.files.files.path);
  console.log(filename);
  //copy file to a public directory
  var targetPath = path.dirname(__filename) + '/public/uploads/' + filename;
  //copy file
  fs.createReadStream(req.files.files.path).pipe(fs.createWriteStream(targetPath));
  //return file url
  console.log(filename);
  res.json({ code: 200, data: { url: 'http://' + req.headers.host + '/uploads/' + filename } });
});

// app.use((req, res) => {
//   // 注意！这里的 req.url 应该是从初始请求中获得的
//   // 完整的 URL 路径，包括查询字符串。
//   match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
//     if (error) {
//       res.send(500, error.message)
//     } else if (redirectLocation) {
//       res.redirect(302, redirectLocation.pathname + redirectLocation.search)
//     } else if (renderProps) {
//       res.send(200, renderToString(<RoutingContext {...renderProps} />))
//     } else {
//       res.send(404, 'Not found')
//     }
//   })
// })
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
