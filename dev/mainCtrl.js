(function(){
  'use strict';
angular.module("miniRouting").controller("mainCtrl", ['$scope', 'mainSvc', function($scope, mainSvc) {
  $scope.testMainCtrl = 'testing from mainCtrl';
  $scope.testMainSvc = mainSvc.testMainSvc;
}]);
})();