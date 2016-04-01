'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('ListCtrl', ['$scope', '$timeout','$api', function ($scope, $timeout,$api) {
    $scope.getItems=function(item){
      var getItems=new $api(item);
      getItems.list().then(function(response) {
        $scope.shops=response.data;
        console.log($scope.shops);
    });
    };
    $scope.getItems("shops");
}]);