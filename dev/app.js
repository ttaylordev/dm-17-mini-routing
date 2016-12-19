(function(){
  'use strict';
var miniRouting = angular.module('miniRouting', ['ui.router']);


miniRouting.config(['$urlRouterProvider', '$stateProvider', function( $urlRouterProvider, $stateProvider) {
  // $urlRouterProvider.when('/home');
  $urlRouterProvider.otherwise('/');

  var homeState = {
    name: 'home',
    url: '/home',
    templateUrl: './html/home/home.html',
    controller: 'homeCtrl'
  };

  var productsState = {
    name: 'products',
    url: '/products/:id',
    templateUrl: './html/products/products.html',
    controller: 'productsCtrl'
  }
  
  var settingsState = {
    name: 'settings',
    url: '/settings',
    templateUrl: './html/settings/settings.html',
    controller: 'settingsCtrl'
  }
  $stateProvider.state(homeState)
  $stateProvider.state(productsState)
  $stateProvider.state(settingsState)
}]);
})();
