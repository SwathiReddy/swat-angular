(function(){
  'use strict';

  angular.module('MenuApp').
  component('categoriesList',{
    templateUrl: 'src/data/templates/categoriesList.html',
    bindings: {
      items : '<'
    }
  });

})();
