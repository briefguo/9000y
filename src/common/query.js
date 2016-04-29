//api/Phalapi/Public/?service=News.getAllInfo
var $ = require('jquery');

query = function(api_name, params, callback){
  var host    = 'http://localhost';
  var path    = '/9000y/api/Phalapi/Public/';
  var api_url = host + path + '?service=' + api_name;

  $.ajax({
    url    : api_url,
    data   : params,
    success: function(r){
      try{
        callback(r);
        console.log(api_name, params, r);
      }
      catch(e){
        console.log(api_name, params, e);
      }
    }
  })
};