var fbLists = new Firebase('https://hrr-kitchen.firebaseio.com/lists');
var fbTopics = new Firebase('https://hrr-kitchen.firebaseio.com/topics');
var appControllers = angular.module('appControllers');

appControllers.controller('adminCtrl', ['$scope', 
  function($scope){
    // $scope.lists = [
    //   ['How old are you?','Why are you here?',
    //         'Would you name your son Rohan?','Why am I insane'],
    //   ['What do you want after HR?','Do you like Doug?',
    //         'Do you like Kobe?','Would you do a startup?'],
    //   ['What is poppin my dawg?','Would you secretly cut the Beard?',
    //          'Do you like hot weather?','Do you like smelly cheese?',
    //         'Why not?']
    // ];

    $scope.addTopic = function(){
      //access current listBox and add empty topic
        //when lose focus from box OR press enter, save topic to list
        //
    };

    





    $scope.formData = {};
    $scope.newList = [];

    $scope.createNewTopic = function(){
      //find the box button is within, find list 'ul',
      //add empty topic 'li' to the 'ul'
      // Get element in angular:
      console.log('inside create topic');
      var newEmptyTopic = angular.element(''+
        '<li class="topic">'+
        '<input class="topicInput" type="text" placeholder="new topic here"></input>'+
        '</li>'
      );
      topicList.append( newEmptyTopic );
    };
    
    //create (or unhide) new box with plus button inside to create new empty
    //topics
    $scope.createList = function(){
      console.log('top of create list')
      var allLists = angular.element( document.querySelector( '#adminLists' ) );
      var newList = angular.element('' + 
        '<div class="listBox">' + 
          '<ul ng-model="topicList" class="list"></ul>'+
          '<button ng-click="createNewTopic()" class="glyphicon glyphicon-plus"></button>'+
        '</div>'
      );

      allLists.append(newList);
      console.log('bottom of create list')
    };
  }]
)


// to grab all the current lists....
//   lists each have

//every directive is an element











