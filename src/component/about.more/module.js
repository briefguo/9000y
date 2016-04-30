import { News } from './service';

angular
  .module('nine.about', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/index");
    $stateProvider
      .state('about.more', {
        url: "/more",
        views: {
          'more': {
            templateUrl: './src/component/about.more/tpl.html',
            controller: function($scope) {
              News.getAllInfo(function(r) {
                $scope.items = r.data.info;
                $scope.$apply();
              });
            }
          }
        }
      })
  })
