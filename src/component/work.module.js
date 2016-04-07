angular.module('nine.work', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/index");
    $stateProvider
      .state('work', {
        url        : "/work",
        templateUrl: "template/works.php"
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
          callback('success', data);
          //$scope.items = data;
        }).error(function(data, header, config, status){
          callback('error', data);
          //console.log();
          //处理响应失败
        });
      }
    };
    return News;
  }])
  .controller('newslistController', ['$scope', 'News', function($scope, News){
    News.getList(function(state, data){
      console.log(state);
      $scope.items = data;
    });
  }])
