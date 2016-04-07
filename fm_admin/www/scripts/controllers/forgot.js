'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('forgotCtrl', function($scope,$auth,$state,localStorageService,$api) {
  	$scope.user='';
  	$scope.reset = function(form) {
      $scope.submitted=true;
      if(!form.$valid){
        return;
      }
      var Api=new $api('password/email');
      Api.save($scope.user).then(function(response) {
        console.log(response);
        $state.go('dashboard.home');
      });
      
    };

  });
