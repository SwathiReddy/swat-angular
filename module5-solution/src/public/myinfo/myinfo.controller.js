(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);
MyInfoController.$inject = ['MenuService','ApiPath'];
function MyInfoController(MenuService, ApiPath) {
  var myinfoCtrl = this;

  myinfoCtrl.user = MenuService.user;
  myinfoCtrl.basePath = ApiPath;
}

})();
