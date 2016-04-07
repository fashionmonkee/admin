'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('RegisterCtrl', function($scope,$auth,localStorageService,$state) {
  	$scope.user={};
    $scope.register = function(form) {
      $scope.submitted=true;
      if(!form.$valid){
        return;
      }
      $scope.user.role_id=1;
      $auth.signup($scope.user,{url:'http://192.168.1.4/register'}).then(function(response) {
          localStorageService.set('loginData', response.data);
          $auth.setToken(response);
          $state.go('dashboard.home');
          console.log('You have successfully created a new account and have been signed-in');
        })
        .catch(function(response) {
          $scope.errorMsg=response.data;
        });
    };
  });
