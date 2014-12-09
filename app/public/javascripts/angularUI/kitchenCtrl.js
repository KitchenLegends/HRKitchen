'use strict';
var userName = 'rory';

var fbHangouts = new Firebase('https://hrr-kitchen.firebaseio.com/hangouts')
// if so then provide the user with the hangout url

var appControllers = angular.module('appControllers', []);


//this controller handles the kitchen view and designates which seats are available
appControllers.controller('kitchenCtrl', ['$scope',
  function ($scope) {
    var satDown = false;
    $scope.currentSeat = "standing";
    $scope.currentURL = "No current hangout url";

    $scope.seats = {};
    $scope.hangouts = {};

    fbSeating.on("value", function(snapshot) {

      $scope.$apply(function(){
        $scope.seats = snapshot.val();

      });

    });

    fbHangouts.on("value", function(snapshot) {

      $scope.$apply(function(){
        $scope.hangouts = snapshot.val();
      });

    });


    $scope.myData = {};


    $scope.myData.doClick = function(seat, $event) {

      $event.preventDefault();

      console.log('SEAT', seat);

      if (!satDown){

        if (!seat.taken){

          $scope.currentSeat = seat;

          seat.name = userName;
          seat.taken = true;
          satDown = true;

          setOrGetHangoutUrl(seat, $scope)


          fbSeating.set($scope.seats)

        }else{

          bootbox.alert("Seat already occupied");
          $(".modal-backdrop").css("z-index", "0");

        }

      }else{

        if (seat.name === userName){

          seat.name = 'empty';
          seat.taken = false;
          satDown = false;

          $scope.currentSeat = "standing";
          $scope.currentURL = "No current hangout url";

          fbSeating.set($scope.seats);

        }

      }

    };

  }]

);

