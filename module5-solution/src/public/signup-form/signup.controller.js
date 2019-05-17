(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);
SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var register = this;

  register.submit = function (itemNumber) {
    var promise = MenuService.getfavItem(itemNumber);
    promise.then(function(response){
      register.user.FavoriteItem = response;
      register.user.completed = true;
      register.err = false;
      MenuService.user = register.user;
    })
   .catch(function (error) {
     MenuService.user = {};
     register.user.completed = false;
     register.err = true;
     console.log("Something is not right");
   });
 }
}
})();
