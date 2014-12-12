'use strict';

var fbSeating = new Firebase('https://hrkitchen.firebaseio.com/seating');

/* App Module */

var kitchenApp = angular.module('kitchenApp', [
  'ui.bootstrap',
  'ngRoute',
  'appControllers'
  ],

  function($interpolateProvider) {
    $interpolateProvider.startSymbol('{%');
    $interpolateProvider.endSymbol('%}');
  }
);
//constructoreque
//
kitchenApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/partials/kitchenView.html', //is this even loading?
        controller: 'kitchenCtrl'
      }).
      when('/admin', {
        templateUrl:'../partials/admin.html',
        controller:'adminCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);



