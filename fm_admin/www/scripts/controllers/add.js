'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp').controller('AddCtrl', function($scope,$api,$state) {
	  $scope.page=1;
    $scope.category="1";
    $scope.selectedImages=[];
    $scope.selectedCategory=[];
    $scope.categories=[{id:1,name:'Mens'},{id:2,name:'Womens'},{id:3,name:'Kids'}];
    $scope.shop={
      "name":"",
      "description":"",
      "ratings":0,
      "address_id":"",
      "banner_image":"",
      "address":{
        "address1":"",
        "address2":"",
        "mobile":"",
        "phone":"",
        "area":"",
        "city":"",
        "pin":"",
        "state":"",
        "country":"",
        "latitude":"",
        "longtitude":""
      },
      "category":[],
      "images":[]
    };

    $scope.saveShop=function(){
      var Api=new $api('shops');
      $scope.shop.category=$scope.selectedCategory;
      $scope.shop.images=$scope.selectedImages;
      Api.save($scope.shop).then(function(response) {
        console.log(response);
        $state.go('dashboard.list');
      });    
    };


    $scope.move=function(flag,form){
      
      if(flag === 'front'){
        $scope.submitted=true;
        if($scope.page === 1 && !form.$valid){
          return;
        }else if($scope.page === 1){
          $scope.search=$scope.shop.address.address1+','+$scope.shop.address.address2+','+$scope.shop.address.city+','+$scope.shop.address.pin+','+$scope.shop.address.country;
          if (!this.geocoder)
            this.geocoder = new google.maps.Geocoder();
            this.geocoder.geocode({ 'address': 'chennai,600042' }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              $scope.shop.address.latitude=results[0].geometry.location.lat();
              $scope.shop.address.longtitude=results[0].geometry.location.lng();console.log(results[0].geometry.location.lng());
              $scope.page++;
              $scope.$apply();
            } else {
              $scope.page++;
              console.log("Sorry, this search produced no results.");
            }
          });
        }else{
        $scope.page++;
      }
      }else{
        $scope.page--;
      }
    };

    $scope.getItems=function(item){
      var getItems=new $api(item);
      getItems.get($state.params.data).then(function(response) {
        angular.forEach(response.data.images, function(value, key){
          $scope.selectedImages.push(value.image_url);
        });
        angular.forEach(response.data.category, function(value, key){
          $scope.selectedCategory.push(value.id);
        });
        $scope.shop=response.data;
    });
    };
    if($state.params.data !== null){
      $scope.getItems("shops");
    }    

    $scope.getCategory=function(endpoint){
      var Api=new $api(endpoint);
      Api.list().then(function(response) {
        $scope.subCategories=response.data;
      });
    };
    $scope.getCategory('subCategory');

    $scope.getAreas=function(endpoint){
      var Api=new $api(endpoint);
      Api.list().then(function(response) {
        $scope.areas=response.data;
      });
    };
    $scope.getAreas('areas');





  	$(function () {
        $("#shopImages").change(function () {
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = imageIsLoaded;
                reader.readAsDataURL(this.files[0]);
            }
        });
    });

    function imageIsLoaded(e) {
      $scope.selectedImages.push(e.target.result);
      $scope.$apply();
    };

    $(function () {
        $("#bannerImages").change(function () {
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = bannerIsLoaded;
                reader.readAsDataURL(this.files[0]);
            }
        });
    });

    function bannerIsLoaded(e) {
      $scope.shop.banner_image=e.target.result;
      $scope.$apply();
    };

    $scope.removeImages=function(index){
      $scope.selectedImages.splice(index, 1);
    };

    
});

