'use strict';
var userName = 'rory';

var fbHangouts = new Firebase('https://hrr-kitchen.firebaseio.com/hangouts')
// if so then provide the user with the hangout url

var appControllers = angular.module('appControllers', []);

//the function either tells the user to enter a url or gives a url. Called when they click on a seat
var setOrGetHangoutUrl = function(seat, $scope){

  var table = $scope.hangouts[seat.seatNumber];

  console.log('Table', table)

  if (!table.users){
    table.users++;
    $scope.hangouts[seat.seatNumber] = table;
    table.message = 'Waiting for first person seated to enter their Hangout url. \n Url bar at bottom will update automatically when they add it.';
    //$scope.currentSeat = seat.tableNumber + ' - ' + seat.seatNumber;

    bootbox.prompt("Enter Google Hangout URL", function(result) {
      if (result === null) {

        console.log('empty URL input');

      } else {

        table.url = result;
        table.message = 'Copy and paste this URL to join the chat!';

        //$('.urlbar').text(result || 'no hangout URL entered yet');
        $scope.$apply(function(){
          console.log('SEAT', seat, table);
          $scope.currentURL = result;
          $scope.currentSeat = seat.tableNumber + ' - ' + seat.seatNumber;

        });

        fbHangouts.set($scope.hangouts);

      }
    });
    $(".modal-backdrop").css("z-index", "0");

  }else{

    bootbox.alert(table.message + '\n\n' + table.url);
    $(".modal-backdrop").css("z-index", "0");

    $scope.$apply(function(){
      console.log('SEAT', seat, table);
      $scope.currentURL = table.url;
      $scope.currentSeat = seat.tableNumber + ' - ' + seat.seatNumber;

    });

  }

};



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

