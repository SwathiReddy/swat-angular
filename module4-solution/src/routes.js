(function(){
  'use strict';
  angular.module('MenuApp')
  .config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home',{
    url: '/',
    templateUrl: 'src/MenuApp/templates/home.template.html'
  })

  .state('categories',{
    url: '/categories',
    templateUrl: 'src/data/templates/categories.template.html',
    controller : 'CategoriesController as categoryCtrl',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items',{
    url: '/items/{itemId}',
    templateUrl: 'src/data/templates/items.template.html',
    controller : 'CategoryItemsController as categoryItemsCtrl',
    resolve: {
      items: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.itemId);
      }]
    }
  });


}

})();
