'use strict';


angular.module('routerApp')
  .controller('signupCtrl', function($scope,$state,$api,$auth) {
  	$scope.moveState=function(state){
  		$state.go(state);
  	};
  	$scope.signup = function(form) {
      $scope.submitted=true;
      if(!form.$valid){
        return;
      }
      $auth.signup($scope.user,{url:'http://localhost:5000/signup'}).then(function(response) {
          commonData.userId=response.data.userId;
          $auth.setToken(response);
          $state.go('home');
          console.log('You have successfully created a new account and have been signed-in');
        })
        .catch(function(response) {
          console.log(response.data.message);
        });
    };
});