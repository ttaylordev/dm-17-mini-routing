angular.module("miniRouting").controller("productsCtrl", ['$scope', '$stateParams', 'productsSvc', function($scope, $stateParams, productsSvc) {
  $scope.test = $stateParams.id;
  $scope.testProductsCtrl = 'testing from productsCtrl';
  $scope.svcTest = productsSvc.svcTest;
}]);