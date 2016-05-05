var express = require('express');
var path = require('path')
var router = express.Router();

/* GET App home page. */
router.get('*', function(req, res) {
  res.sendFile(path.resolve('public', 'index.html'))
})
module.exports = router;
