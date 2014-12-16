function clog(v){console.log(v);}

// var fbTopics       = new Firebase('https://hrr-kitchen.firebaseio.com/topics');
var appControllers = angular.module('appControllers');



appControllers.controller('adminCtrl', ['$scope',
  function($scope){

    var fbLists  = new Firebase('https://hrkitchen.firebaseio.com/lists');
    // var newMessageRef  = listRef.push();
    // newMessageRef.get({ 'user_id': 'fred', 'text': 'Yabba Dabba Doo!' });
    // var list = fbLists.child({list:[{topic:'What time is it?'},{topic:'What day is it?'}]});


    $scope.lists = [
      {list:[{topic:'What time is it?'},{topic:'What day is it?'}]},
      {list:[{topic:'BACON BACON?'},{topic:'NONP?'},{topic:'whats going on'}, {topic:'Chedda Chedda?'}]}
    ];



    // $scope.useThisList = function(this){
    //   $scope.topicsOfDay = this;
    // }

    // clog(fbLists.val);


    fbLists.on("value", function(data) {
      // do some stuff once
      // clog(origLists);
      // clog(data.val().lists)
      $scope.$apply(function(){
        $scope.lists = data.val().lists;
      });
    });
    // Get the ata on a posch .  fbListsid
    // fbLists.on("child_changed", function(snapshot) {
    //   var changedPost = snapshot.val();
    //   console.log("The updated post title is " + changedPost.title);
    // });
    // fbLists.set({lists:$scope.lists}, function(error) {
    //   if (error) {
    //     alert("Data could not be saved." + error);
    //   } else {
    //     alert("Data saved successfully.");
    //   }
    // });

    $scope.createList = function(){
      $scope.lists.push({list:[{topic:'first new topic'}]});
      fbLists.update({lists:$scope.lists})
    };


    $scope.addTopic = function(list){
      list.push({topic:'new topic'});
      fbLists.update({lists:$scope.lists})
    };


    $scope.removeTopic = function(topic, list){
      list.splice( list.indexOf(topic), 1 );
      fbLists.update({lists:$scope.lists})
    };

    $scope.useThisList = function(list){
      //send this list to firebase
     var fbTopicsOfDay  = new Firebase('https://hrkitchen.firebaseio.com/topicsOfDay');
     var temp = angular.toJson(list);
     temp = angular.fromJson(temp)
     fbTopicsOfDay.set({list:temp});
    };
  

    $scope.updateDb = function(){
      var temp = angular.toJson($scope.lists);
      temp = angular.fromJson(temp)
      fbLists.update({lists:temp});
    };




    


    


    
  }]
)








