var $ = require('jquery');

var query = function(api_name, params, callback) {
  var local = 'http://localhost/9000y/api/Phalapi/Public/';
  var host = 'http://139.196.210.223:81/';
  var api_url = host + '?service=' + api_name;

  $.ajax({
    url: api_url,
    method: 'POST',
    cache: false,
    data: params,
    success: function(r) {
      try {
        if (r.ret == 400) {
          alert(r.msg);
          return;
        }
        callback(r);
        console.log(api_name, params, r);
      } catch (e) {
        alert(e);
        console.log(e);
      }
    }
  })
};

export { query };
