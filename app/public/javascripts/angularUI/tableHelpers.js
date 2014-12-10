'use strict'


var startOrJoinVideo = function(seat, $scope){

  var table = $scope.hangouts[seat.tableNumber];


  if (table.users === 0){

    table.users++;

    bootbox.alert("Creating a video group chat!");
    $(".modal-backdrop").css("z-index", "0");

    $scope.$apply(function(){
      console.log('SEAT', seat, table);
      $scope.currentURL = table.url;
      $scope.currentSeat = seat.tableNumber + ' - ' + seat.seatNumber;
    });

    //call function to start video and store link to it here

    fbHangouts.set($scope.hangouts);

  }else{

    bootbox.alert('Joining a video chat!');
    $(".modal-backdrop").css("z-index", "0");

    $scope.$apply(function(){
      console.log('SEAT', seat, table);
      $scope.currentURL = table.url;
      $scope.currentSeat = seat.tableNumber + ' - ' + seat.seatNumber;
    });

    //call function to join video here

    fbHangouts.set($scope.hangouts);

  }

};

var handleClick = function(seat, $event, $scope) {

  $event.preventDefault();

  console.log('SEAT', seat);

  if (!$scope.satDown){

    if (!seat.taken){

      $scope.currentSeat = seat.seatNumber;

      seat.name = userName;
      seat.taken = true;
      $scope.satDown = true;

      fbSeating.set($scope.seats);

      startOrJoinVideo(seat, $scope)

    }else{

      bootbox.alert("Seat already occupied");
      $(".modal-backdrop").css("z-index", "0");

    }

  }else{

    if (seat.name === userName){

      seat.name = 'empty';
      seat.taken = false;
      $scope.satDown = false;

      $scope.currentSeat = "standing";
      $scope.currentURL = "No current hangout url";

      fbSeating.set($scope.seats);

      var table = $scope.hangouts[seat.tableNumber];

      table.users--;

      $scope.currentSeat = 'Standing'

    }else{

      bootbox.alert("You're already sat down");
      $(".modal-backdrop").css("z-index", "0");

    }

  }

};

var clearRoom = function(){
  console.log('clearing')

  var hangouts = {
    "table1" : {
      "users": 0,
      "message": 0,
      "url": 0
    },
    "table2" : {
      "users": 0,
      "message": 0,
      "url": 0
    },
    "table3" : {
      "users": 0,
      "message": 0,
      "url": 0
    },
    "table4" : {
      "users": 0,
      "message": 0,
      "url": 0
    }
  }

  var seating = {
    "table1" : {
      "seat1" : {
        "name" : "empty",
        "seatNumber" : "seat1",
        "tableNumber" : "table1",
        "taken" : false
      },
      "seat2" : {
        "name" : "empty",
        "seatNumber" : "seat2",
        "tableNumber" : "table1",
        "taken" : false
      },
      "seat3" : {
        "name" : "empty",
        "seatNumber" : "seat3",
        "tableNumber" : "table1",
        "taken" : false
      },
      "seat4" : {
        "name" : "empty",
        "seatNumber" : "seat4",
        "tableNumber" : "table1",
        "taken" : false
      },
      "tableNumber" : "table1"
    },
    "table2" : {
      "seat1" : {
        "name" : "empty",
        "seatNumber" : "seat1",
        "tableNumber" : "table2",
        "taken" : false
      },
      "seat2" : {
        "name" : "empty",
        "seatNumber" : "seat2",
        "tableNumber" : "table2",
        "taken" : false
      },
      "seat3" : {
        "name" : "empty",
        "seatNumber" : "seat3",
        "tableNumber" : "table2",
        "taken" : false
      },
      "seat4" : {
        "name" : "empty",
        "seatNumber" : "seat4",
        "tableNumber" : "table2",
        "taken" : false
      },
      "tableNumber" : "table2"
    },
    "table3" : {
      "seat1" : {
        "name" : "empty",
        "seatNumber" : "seat1",
        "tableNumber" : "table3",
        "taken" : false
      },
      "seat2" : {
        "name" : "empty",
        "seatNumber" : "seat2",
        "tableNumber" : "table3",
        "taken" : false
      },
      "seat3" : {
        "name" : "empty",
        "seatNumber" : "seat3",
        "tableNumber" : "table3",
        "taken" : false
      },
      "seat4" : {
        "name" : "empty",
        "seatNumber" : "seat4",
        "tableNumber" : "table3",
        "taken" : false
      },
      "tableNumber" : "table2"
    },
    "table4" : {
      "seat1" : {
        "name" : "empty",
        "seatNumber" : "seat1",
        "tableNumber" : "table4",
        "taken" : false
      },
      "seat2" : {
        "name" : "empty",
        "seatNumber" : "seat2",
        "tableNumber" : "table4",
        "taken" : false
      },
      "seat3" : {
        "name" : "empty",
        "seatNumber" : "seat3",
        "tableNumber" : "table4",
        "taken" : false
      },
      "seat4" : {
        "name" : "empty",
        "seatNumber" : "seat4",
        "tableNumber" : "table4",
        "taken" : false
      },
      "tableNumber" : "table2"
    }
  }

  fbHangouts.set(hangouts);

  fbSeating.set(seating);


}
