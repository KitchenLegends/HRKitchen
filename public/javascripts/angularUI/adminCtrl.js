var appControllers = angular.module('appControllers');

appControllers.controller('adminCtrl', ['$scope', 
  function($scope){
    $scope.lists = [
      ['How old are you?','Why are you here?',
            'Would you name your son Rohan?','Why am I insane'],
      ['What do you want after HR?','Do you like Doug?',
            'Do you like Kobe?','Would you do a startup?'],
      ['What is poppin my dawg?','Would you secretly cut the Beard?',
             'Do you like hot weather?','Do you like smelly cheese?',
            'Why not?']
    ];



    $scope.formData = {};
    $scope.topics = [];
    
    $scope.createTopic = function(){
      $scope.topics.push($scope.formData.topic);
    };
  }]
);


// to grab all the current lists....
//   lists each have