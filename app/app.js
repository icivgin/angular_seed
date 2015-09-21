var app = angular.module('angularSeed', ['ngRoute', 'angularSeed.services', 'angularSeed.controllers']);

app.config(['$routeProvider', '$locationProvider',
   function($routeProvider, $locationProvider) {
      $routeProvider.
       when('/', {
          templateUrl: '../public/components/home/home.html',
          controller: 'MainCtrl'
       }).
       otherwise({
          redirectTo: '/'
       });

      $locationProvider.html5Mode(true);
}]);