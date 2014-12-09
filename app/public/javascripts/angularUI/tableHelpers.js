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

    bootbox.alert(table.message + '<br>' + table.url);
    $(".modal-backdrop").css("z-index", "0");

    $scope.$apply(function(){
      console.log('SEAT', seat, table);
      $scope.currentURL = table.url;
      $scope.currentSeat = seat.tableNumber + ' - ' + seat.seatNumber;

    });

    fbHangouts.set($scope.hangouts);

  }

};
