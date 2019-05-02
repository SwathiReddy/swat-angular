(function(){

  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController',CategoriesController);

CategoriesController.$inject=['items'];
function CategoriesController(items){
   var categoryCtrl=this;
   categoryCtrl.categoryItems=items.data;
}

})();
