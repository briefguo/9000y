const angular = require('angular');
require('angular-ui-router');

require('../common/lib');

require('../component/index/module');
require('../component/about/module');
require('../component/service/module');
require('../component/work/module');
require('../component/support/module');

angular.module('nine', [
  'ui.router',
  'nine.index',
  'nine.about',
  'nine.service',
  'nine.work',
  'nine.support',
]);
