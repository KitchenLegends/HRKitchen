'use strict';
window.userName = 'Loading';



var appControllers = angular.module('appControllers', ['ngCookies']);


//this controller handles the kitchen view and designates which seats are available
//It uses functions stored in tableHelpers.js
appControllers.controller('kitchenCtrl', ['$scope', '$cookies',
  function ($scope, $cookies) {

    var user  = {}
    if ($cookies.user) {

      window.userName = $cookies.user
    } else {
      window.userName = "Anonymous"
    }

    $scope.satDown = false;
    $scope.currentSeat = "standing";
    $scope.currentURL = "No current hangout url";

    $scope.seats = {};
    $scope.hangouts = {};

    //Updates the local seating data when the firebase updates
    fbSeating.on("value", function(snapshot) {

      $scope.$apply(function(){
        $scope.seats = snapshot.val();

      });

    });


    $scope.videos = {};
    $scope.viewThumbs = viewThumbVideos;

    $scope.doClick = function(seat, $event) {
      handleClick(seat, $event, $scope);
    };

    $scope.clearRoom = clearRoom;

  }]

);

