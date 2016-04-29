angular.module('nine.work', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/index");
    $stateProvider
      .state('work', {
        url: "/work",
        templateUrl: "template/works.php"
      })
  })
