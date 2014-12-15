function clog(v){console.log(v);}

// var fbTopics       = new Firebase('https://hrr-kitchen.firebaseio.com/topics');
var appControllers = angular.module('appControllers');

appControllers.controller('adminCtrl', ['$scope',
  function($scope){

    // var fbLists        = new Firebase('https://hrr-kitchen.firebaseio.com/lists');
    // var newMessageRef  = listRef.push();
    // newMessageRef.get({ 'user_id': 'fred', 'text': 'Yabba Dabba Doo!' });
    // var list = fbLists.child({list:[{topic:'What time is it?'},{topic:'What day is it?'}]});


    $scope.lists = [
      {list:[{topic:'What time is it?'},{topic:'What day is it?'}]},
      {list:[{topic:'BACON BACON?'},{topic:'NONP?'},{topic:'whats going on'}, {topic:'Chedda Chedda?'}]}
    ];


    $scope.createList = function(){
      $scope.lists.push({list:[{topic:'first new topic'}]});
    };


    $scope.addTopic = function(list){

      list.push({topic:'new topic'});
    };


    $scope.removeTopic = function(topic, list){
      //brokennnnnn
      // clog('inside remove topic')
      list.splice( list.indexOf(topic), 1 );
      // clog(list);
    };

    $scope.useThisList = function(list){
      //send this list to firebase
    };
    






    


    


    
  }]
)








