function clog(v){console.log(v);}
var fbLists        = new Firebase('https://hrr-kitchen.firebaseio.com/lists');
var fbTopics       = new Firebase('https://hrr-kitchen.firebaseio.com/topics');
var appControllers = angular.module('appControllers');

appControllers.controller('adminCtrl', ['$scope',
  function($scope){


    $scope.addTopic = function(){
      clog("INSIDE ADD TOPIC");
    };


    //link function - inside of directive - all jquery functionality
    //instead of using jquery, has an el tag
    //create another directive that holds all the list items
    $scope.formData = {};


    

    $scope.createListBox = function(){

      // clog('inside create LIST');
      var allLists = angular.element( document.querySelector( '#adminLists' ) );
      var newList  = angular.element('<list-box></list-box>');

      allLists.append(newList);
    };
    

    
  }]
)








