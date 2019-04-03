(function(){

'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService){

    var buyCtrl=this;

    buyCtrl.items=ShoppingListCheckOffService.getToBuyItems();

    buyCtrl.markAsBought= function(itemIndex){
      ShoppingListCheckOffService.bought(itemIndex);
    }

    buyCtrl.isEmpty=function(){
      return buyCtrl.items.length==0;
    }

  }

  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService){

    var showBoughtItem = this;

    showBoughtItem.items=ShoppingListCheckOffService.getAlreadyBoughtItems();

    showBoughtItem.isEmpty= function(){
      return showBoughtItem.items.length==0;
    }

  }

  function ShoppingListCheckOffService(){
    var service=this;

    var to_buy= [
      {
        name: "cookies",
        quantity: 10
      },
      {
        name: "chocolates",
        quantity: 5
      },
      {
        name: "scones",
        quantity: 15
      },
      {
        name: "chips",
        quantity: 8
      },
      {
        name: "mint",
        quantity: 2
      }

    ];

    var bought=[];

    service.getToBuyItems=function(){
      return to_buy;
    }

    service.getAlreadyBoughtItems=function(){
      return bought;
    }

    service.bought = function(itemIndex){
      bought.push(to_buy[itemIndex]);
      to_buy.splice(itemIndex,1);
    }

  }


})();
