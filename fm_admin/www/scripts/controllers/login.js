'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('LoginCtrl', function($scope,$auth,$state,localStorageService) {

  	$scope.login = function(form) {
      $scope.submitted=true;
      if(!form.$valid){
        return;
      }
      $auth.login($scope.user,{url:'http://10.0.0.139/login'})
        .then(function(response) {
          localStorageService.set('loginData', response.data);
          $state.go('dashboard.home');
          console.log('You have successfully signed in!');
        })
        .catch(function(error) {
          console.log(error.data.message, error.status);
        });
    };

  });
