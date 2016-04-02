'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('ProfileCtrl', function($scope,$auth,$api,$state) {
  	$scope.getItems=function(item){
  		var getItems=new $api(item);
  		getItems.get(10).then(function(response) {
  			$scope.user=response.data;
  			console.log($scope.user);
		});
  	};

    $scope.update=function(){
      var postItems=new $api('users');
      postItems.save($scope.user).then(function(response){
        console.log(response);
        $state.go('dashboard.home');
      });
    }
  	$scope.getItems("users");
  
  });
