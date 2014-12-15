function clog(v){console.log(v);}
var fbLists        = new Firebase('https://hrr-kitchen.firebaseio.com/lists');
var fbTopics       = new Firebase('https://hrr-kitchen.firebaseio.com/topics');
var appControllers = angular.module('appControllers');

appControllers.controller('adminCtrl', ['$scope',
  function($scope){
    $scope.lists = [];
    $scope.addList = function(){
      var newList = { topics:[] };
      $scope.lists.push(newList)
    };

    

    


    


    
  }]
)








