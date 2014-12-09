// This module creates floor, tables and chairs for the kitchen

// function to create Table (with seats)
var makeFloor = function(target){
  floor = new zebra.ui.Panel(); // creates kitchen floor
  floor.setBounds(300,20, 950, 560);
  floor.setBackground("beige");    // set beige background
  floor.setBorder(new zebra.ui.Border("black", 3 , 20));
  target.add(floor);
}


var makeTable = function(tableName, x,y){

  var table = new zebra.ui.Panel('Table');

  table.setSize(200, 100);
  table.setBackground("grey")
  table.setBorder(new zebra.ui.Border("white", 3 , 20));
  table.setLocation(x , y);

  floor.add(table);

  makeSeat('seat1', tableName, x + 30, y-30);
  makeSeat('seat2', tableName, x + 130, y-30);
  makeSeat('seat3', tableName, x + 30, y+100);
  makeSeat('seat4', tableName, x + 130, y+100);


};

// creates a seat
var makeSeat = function(seatName, tableName, x,y){

  var seat = new zebra.ui.Button();

  seat.setSize(30, 30);
  seat.setBackground("white");
  seat.setLocation(x , y);

  seat.mouseReleased = function(e){

    seatClick({table : tableName, seat: seatName});

  };

  seat.

  floor.add(seat);

};

// creates 4 tables in kitchen
var createTables = function(target){
  makeFloor(target);
  makeTable('table1', 250, 100);
  makeTable('table2', 500, 100);
  makeTable('table3', 250, 300);
  makeTable('table4', 500, 300);
}


