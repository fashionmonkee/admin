'use strict';


angular.module('routerApp')
  .controller('loginCtrl', function($scope,$state,$auth,commonData,$rootScope) {
  	$scope.moveState=function(state,id){
  		$state.go(state,{data:id});
  	};

  	$scope.login = function(form) {
      $scope.submitted=true;
      if(!form.$valid){
        return;
      }
      $auth.login($scope.user,{url:'http://10.0.0.139:5000/login'})
        .then(function(response) {
          commonData.userId=response.data.userId;
          $state.go($rootScope.fromState,{data:$rootScope.fromParams.data});
          console.log('You have successfully signed in!');
        })
        .catch(function(error) {
          console.log(error.data.message, error.status);
        });
    };
});