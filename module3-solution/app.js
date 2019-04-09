(function(){

'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems);


function FoundItems(){
  var ddo={
    templateUrl : 'menuItemsList.html',
    scope: {
      items : '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'foundItemsCtrl',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
  var foundItemsCtrl = this;

  foundItemsCtrl.NoItemsFound = function () {
     if(foundItemsCtrl.items != undefined){
      if (foundItemsCtrl.items.length==0) {
        return true;
      }
    }

    return false;
  };
}
NarrowItDownController.$inject=['MenuSearchService'];

function NarrowItDownController(MenuSearchService){

  var ctrl=this;

  ctrl.getMenuItems = function(){
  MenuSearchService.getMatchedMenuItems(ctrl.searchText).then(function(result){

   ctrl.found= result;
    });


  };

  ctrl.notFound= function(){
    MenuSearchService.getMatchedMenuItems(ctrl.searchText).then(function(result){

     ctrl.found= result;
      });
  };


  ctrl.removeItem = function (itemIndex) {
      
      MenuSearchService.removeItem(itemIndex);

    };

}

MenuSearchService.$inject=['$http'];
function MenuSearchService($http){
  var menuService=this;

  var items=[];
  menuService.getMatchedMenuItems= function(description){

    return $http({
     method: 'GET',
     url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
   }).then(function(response){
     var foundItems=response.data.menu_items;

     function checkDescription(menuitem){
       return menuitem.description.includes(description);
     }
       if(description){
      foundItems=foundItems.filter(checkDescription);
      items=foundItems;
    }else{
      foundItems=[];
        items=foundItems;
    }
      return foundItems;
   });


 };

 menuService.removeItem=function (itemIndex) {
    items.splice(itemIndex, 1);
  };

}

})();
