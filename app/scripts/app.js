'use strict';

var apiBase = 'https://hackedu-website.appspot.com/v1';

// @if DEBUG
apiBase = 'localhost:4000/v1';
// @endif

angular.module('hackeduApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'google-maps'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/apply', {
        templateUrl: 'views/apply.html',
        controller: 'ApplyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    if (window.history && window.history.pushState) {
      $locationProvider.html5Mode(true);
    }
  });
