angular.module('nine.service', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/index");
    $stateProvider
      .state('service', {
        url: "/service",
        templateUrl: "template/services.php"
      })
  })

