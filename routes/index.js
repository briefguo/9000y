var path = require('path');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('*', function (request, response){
  response.sendFile(path.resolve('public', 'index.html'))
})

module.exports = router;
