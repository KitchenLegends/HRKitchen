window.userName = 'Loading';
var appControllers = angular.module('appControllers');

appControllers.controller('adminCtrl', ['$scope', 
  function($scope){
    $scope.stuff = 'STUFF HERE';
  }]
);