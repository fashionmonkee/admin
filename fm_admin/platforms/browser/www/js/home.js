'use strict';


angular.module('routerApp')
  .controller('homeCtrl', function($scope,$state) {
  	$scope.moveState=function(state){
  		$('.button-collapse').sideNav('hide');
  		$state.go(state);
  	};
});