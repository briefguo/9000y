angular.module('nine.about', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/index");
    $stateProvider
      .state('about', {
        url        : "/about",
        templateUrl: "./src/component/about/about.php"
      })
      .state('about.newslist', {
        url  : "/list",
        // templateUrl: "template/about.newslist.php",
        views: {
          "newslist": {
            templateUrl: "./src/component/about/about.newslist.php",
            controller : "newslistController"
          }
        }
      })
  })
  .service('News', ['$http', function($http){
    var News = {
      getAllInfo: function(callback){
        query('News.getAllInfo', '', function(r){
          callback(r);
        })
      }
    };
    return News;
  }
  ])
  .controller('newslistController', ['$scope', 'News', function($scope, News){
    News.getAllInfo(function(r){
      $scope.items = r.data.info;
      $scope.$apply();
    });
  }
  ])
