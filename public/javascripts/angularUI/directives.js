var directiveMod = angular.module('app.directives', []);

directiveMod
.directive('listBox', function() {
  //each element needs its own scope?
  //access to outside controller
  //= is two way data bindingwith controller
  //link takes scope
  //ele is jquerywrapped element we'll manipulate. use jquery methods on elemenent creating

  //link is all of the functionality that directive will have
  //ele IS the directive itself <list-box>... and we can... can access scope of controller
  //or put things on the scope inside link


//is the scope of what the directive is inside...
//what scope is this parent connected to?
//= allows us to have two way data binding
  var link = function(scope, ele, attr){
    ele.find('button').on('click', function(){
      console.log('inside ele.children@@@');
    })
  };
  return {
    restrict:'EA',
    link: link,
    templateUrl: './javascripts/angularUI/listboxDirective.html',
    scope: {'adminCtrl':'='}
  };
})



.directive('adminLists', function($compile){
  
  var link = function(scope, ele, attr){
    var list = $compile('<list-box></list-box>')(scope);

    ele.find('button').on('click', function(){
      //prevent from overwriting... bug fix
      console.log('helllo');
      ele.append(list);
    })
  };
  return{
    restrict:'EA',
    link:link,
    templateUrl:'./javascripts/angularUI/adminListsDirective.html',
    scope:{'adminCtrl':'='}
  };
})
