var express   = require('express');
var path      = require('path')
var multipart = require('connect-multiparty');
var fs        = require('fs');
var router    = express.Router();

/* GET App home page. */
router.get('*', function(req, res) {
  res.sendFile(path.resolve('./', 'index.html'))
})
router.post('/upload', multipart(), function(req, res) {
  //get filename
  var filename = req.files.files.originalFilename || path.basename(req.files.files.path);
  console.log(filename);
  //copy file to a public directory
  var targetPath = '/public/uploads/' + filename;
  //copy file
  fs.createReadStream(req.files.files.path).pipe(fs.createWriteStream(targetPath));
  //return file url
  console.log(filename);
  res.json({ code: 200, data: { url: 'http://' + req.headers.host + '/uploads/' + filename } });
});
module.exports = router;
