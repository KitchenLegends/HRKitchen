// This module creates a basic zebra canvas and uses the zebra modules to create the kitchen layout
zebra.ready(function(){

  eval(zebra.Import("ui", "layout"));

  // build Zebra canvas component that adds new
  // Canvas DOM element into page with the given size
  var zCanvas = new zebra.ui.zCanvas(1300,600);
  var root    = zCanvas.root; // save reference to root UI component
  root.setBorder(new zebra.ui.Border("lightblue", 3 , 20));

  createTables(root);

});
