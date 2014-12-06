zebra.ready(function(){

    eval(zebra.Import("ui", "layout"));

    // build Zebra canvas component that adds new
    // Canvas DOM element into page with the given size
    var zCanvas = new zebra.ui.zCanvas(1300,600);
    var root    = zCanvas.root; // save reference to root UI component
    root.setBorder(new zebra.ui.Border("lightblue", 3 , 20));

    var floor = new zebra.ui.Panel(); // create panel
    floor.setBounds(300,20, 950, 560); // shape panel
    floor.setBackground("beige");    // set yellow background
    floor.setBorder(new zebra.ui.Border("black", 3 , 20));
    root.add(floor);

    var makeTable = function(x,y){

          var table = new zebra.ui.Panel();

          table.setSize(200, 100);
          table.setBackground("grey")
          table.setBorder(new zebra.ui.Border("white", 3 , 20));
          table.setLocation(x , y);

          floor.add(table);

          makeSeat(x + 30, y-30);
          makeSeat(x + 130, y-30);
          makeSeat(x + 30, y+100);
          makeSeat(x + 130, y+100);


    };

    var makeSeat = function(x,y){

          var seat = new zebra.ui.Panel();

          seat.setSize(30, 30);
          seat.setBackground("white")
          seat.setBorder(new zebra.ui.Border("blue", 3 , 20));
          seat.setLocation(x , y);

          floor.add(seat);

    };

    makeTable(250, 100);
    makeTable(500, 100);
    makeTable(250, 300);
    makeTable(500, 300);






});

