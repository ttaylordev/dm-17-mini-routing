(function(){
  'use strict';

angular.module("miniRouting").controller("productsCtrl", [
  '$scope',
  '$stateParams',
  'productsSvc',
  function($scope, $stateParams, productsSvc) {
    $scope.testProductsCtrl = 'testing from productsCtrl';
    $scope.svcTest = productsSvc.svcTest;

    $scope.stateParams = $stateParams.id;
    if ($stateParams.id === 'shoes') {
      $scope.productData = productsSvc.shoeData;

    } else if ($stateParams.id === 'socks'){
      $scope.productData = productsSvc.sockData;

    }

  }
]);
})();