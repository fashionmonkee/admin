'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('ListCtrl', ['$scope', '$timeout','$api','$state','$location', function ($scope, $timeout,$api,$state,$location) {
    $scope.getItems=function(item){
      var getItems=new $api(item);
      getItems.list().then(function(response) {
        $scope.shops=response.data;
        console.log($scope.shops);
    });
    };
    $scope.edit=function(id){
    	 $location.path('/' + 'dashboard/add' + '/'+id);
    };
    $scope.getItems("shops");
}]);