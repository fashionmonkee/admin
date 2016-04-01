'use strict';


angular.module('routerApp')
  .controller('profileCtrl', function($scope,$state,$api) {
  	$scope.moveState=function(state){
  		$('.button-collapse').sideNav('hide');
  		$state.go(state);
  	};

  	$scope.getBackgroundStyle = function(imagepath){
	    return {
	        'background-image':'url(' + imagepath + ')'
	    }
	};
  	$scope.getItems=function(item){
  		var getItems=new $api(item);
  		getItems.get('1').then(function(response) {
  			$scope.user=response.data;
  			console.log($scope.user);
		});
  	};
  	$scope.getItems("users");

});
