(function(){

  'use strict';

  angular.module('data').
  controller('CategoryItemsController',CategoryItemsController);

  CategoryItemsController.$inject=['items'];

  function CategoryItemsController(items){
    var categoryItemsCtrl=this;

    categoryItemsCtrl.items= items.data.menu_items;

  }
})();
