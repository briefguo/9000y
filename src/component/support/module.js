angular.module('nine.support', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/index");
    $stateProvider
      .state('support', {
        url        : "/support",
        templateUrl: "template/supports.php"
      })
  })

