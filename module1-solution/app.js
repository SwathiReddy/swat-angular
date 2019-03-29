(function(){

  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.lunchMenu = "";
    $scope.message = "";

    $scope.displayMessage = function(){
      var message = getMessage($scope.lunchMenu);
      $scope.message = message;
    }

    function getMessage(menu){
         var messageToBeDisplayed="";
         var items = menu.split(',');
         if(menu === ""){
           messageToBeDisplayed="Please enter data first";
         }else if(items.length <= 3){
           messageToBeDisplayed="Enjoy!";
         }else{
           messageToBeDisplayed="Too much!";
         }

         return messageToBeDisplayed;

    }

  }

})();
