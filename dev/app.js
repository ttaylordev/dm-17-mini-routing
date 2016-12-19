var miniRouting = angular.module('miniRouting', ['ui.router']);


miniRouting.config(function($routeProvider, $urlRouterProvider) {
  $urlRouterProvider.when('/home');
  $urlRouterProvider.otherwise('/home');

  var homeState = {
    name: 'home',
    url: '/home',
    templateUrl: './html/home.html',
    controller: 'homeCtrl'
  };

  var productsState = {
    name: 'products',
    url: '/products',
    templateUrl: './html/products.html',
    controller: 'productsCtrl'
  }
  
  var settingsState = {
    name: 'settings',
    url: '/settings',
    templateUrl: './html/settings.html',
    controller: 'settingsCtrl'
  }
  $stateProvider.state(homeState)
  $stateProvider.state(productsState)
  $stateProvider.state(settingsState)
});
