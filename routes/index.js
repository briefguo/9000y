var express   = require('express');
var fs        = require('fs');
var path      = require('path')
var multipart = require('connect-multiparty');
var router    = express.Router();

/* GET App home page. */
router.get('*', function(req, res) {
  res.sendFile(path.resolve('./', 'index.html'))
})

router.post('/upload', multipart(), function(req, res) {
  //get filename
  var filename = req.files.files.originalFilename || path.basename(req.files.files.path);

  //copy file to a public directory
  var targetPath = './public/uploads/' + filename;

  //copy file
  fs.createReadStream(req.files.files.path).pipe(fs.createWriteStream(targetPath));

  //return file url
  res.json({ code: 200, data: { url: 'http://' + req.headers.host + '/public/uploads/' + filename } });
});

module.exports = router;
