'use strict';

angular.module('routerApp').controller('listCtrl', function($scope,$api,$state) {
    
    $scope.filterData={areas:'',categories:'',sortBy:''};
    $scope.searchData='';
    $scope.moveState=function(state,id){
      $state.go(state,{data:id});
    };

    $scope.getAreas=function(){
      var getAreas=new $api('areas');
      getAreas.list().then(function(response) {
        $scope.areas=response.data.areas; 
         console.log($scope.areas);      
    });
    };
    $scope.getAreas();

    $scope.getItems=function(item){
      var getItems=new $api(item);
      getItems.list().then(function(response) {
        $scope.shops=response.data.shops;
        console.log($scope.shops);
    });
    };
    $scope.getItems("shops");



    $scope.callMap=function(shop){
      $state.go('map',{data: shop});
    };

    $scope.callNumber=function(number){
      window.plugins.CallNumber.callNumber('', '', number, true);
    };

    $scope.share=function(shop){
      var message=shop.description;
      var subject=shop.name;
      var image=shop.banner;
      var link="";
      window.plugins.socialsharing.share(message,subject,image,link);
    };
    $scope.search=function(){
      $scope.getItems("shops?name="+$scope.searchData);
    }

    $scope.advanceFilter=function(){
      $scope.getItems("shops?areas="+$scope.filterData.areas+",categories="+$scope.filterData.categories+",sortBy="+$scope.filterData.sortBy);
      $('.button-filter').sideNav('hide');
    };


  
});