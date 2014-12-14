'use strict';

window.userName = 'Loading';

var fbHangouts = new Firebase('https://hrr-kitchen.firebaseio.com/hangouts')


var appControllers = angular.module('appControllers', ['ngCookies']);


//this controller handles the kitchen view and designates which seats are available
//It uses functions stored in tableHelpers.js
appControllers.controller('kitchenCtrl', ['$scope', '$cookies',
  function ($scope, $cookies) {
    $scope.logout = function(callback){

      logout(function(){
        fbSeating.on("value", function(snapshot) {
          $scope.$apply(function(){
            $scope.seats = snapshot.val();
          });
        });
      });

    }

    

    // });
    var user  = {}
    if ($cookies.user) {
      user.name = $cookies.user
      user.avatar = $cookies.avatar
      window.userName = $cookies.user
      console.log(user);
    } else {
      window.userName = null
    }
    $scope.user = user;
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

  //Updates the hangout urls- currently not used as the app now uses appear.in instead of google hangouts
    fbHangouts.on("value", function(snapshot) {

      $scope.$apply(function(){
        $scope.hangouts = snapshot.val();
      });

    });


    $scope.viewThumbs = viewThumbVideos;

    $scope.doClick = function(seat, $event) {
      console.log('DOCLICK', user.avatar);
      handleClick(seat, $event, $scope);
    };

    $scope.clearRoom = clearRoom;

  }]

);

