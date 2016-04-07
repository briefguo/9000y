angular.module('nine.about', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/index");
    $stateProvider
      .state('about', {
        url        : "/about",
        templateUrl: "template/about.php"
      })
      .state('about.newslist', {
        url  : "/list",
        // templateUrl: "template/about.newslist.php",
        views: {
          "newslist": {
            templateUrl: "template/about.newslist.php",
            controller : "newslistController"
          }
        }
      })
  })
  .service('News', ['$http', function($http){
    var News = {
      getList: function(callback){
        $http({
          url   : 'data/news/list.json',
          method: 'POST'
        }).success(function(data, header, config, status){
          //响应成功
          callback('success',data);
          //$scope.items = data;
        }).error(function(data, header, config, status){
          callback('error',data);
          //console.log();
          //处理响应失败
        });
      }
    };
    return News;
  }])
  .controller('newslistController', ['$scope', 'News', function($scope, News){
    News.getList(function(state,data){
      console.log(state);
      $scope.items = data;
    });
  }])
