'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('forgotCtrl', function($scope,$auth,$state,localStorageService) {

  	$scope.reset = function(form) {
      $scope.submitted=true;
      if(!form.$valid){
        return;
      }
      
    };

  });
