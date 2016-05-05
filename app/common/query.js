var $ = require('jquery');

var query = function(api_name, params, callback) {
  var host = 'http://localhost';
  var path = '/9000y/api/Phalapi/Public/';
  var api_url = host + path + '?service=' + api_name;

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
