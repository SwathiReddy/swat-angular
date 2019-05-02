(function(){
  'use strict';

  angular.module('data').
  component('menuItems',{
    templateUrl: 'src/data/templates/menuItemsList.html',
    bindings: {
      items : '<'
    }
  });

})();
