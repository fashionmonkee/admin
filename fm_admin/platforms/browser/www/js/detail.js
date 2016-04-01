'use strict';


angular.module('routerApp')
  .controller('detailCtrl', function($scope,$api,$state,commonData) {
    $scope.starRating= 0;
    $scope.comment='';
    $scope.commonData=commonData;

 

  	$scope.moveState=function(state){
  		$state.go(state);
  	};

    $scope.rate = function (param) {
      $scope.starRating=param;        
    };

    $scope.postRate=function(id){
      var api=new $api('ratings');
      api.save({rate:$scope.starRating,shopId:$scope.shop.id,userId:commonData.userId}).then(function(response){
        $scope.closeModal('rate-modal');
      });      
    };

    $scope.postComment=function(id){
      var api=new $api('reviews');
      api.save({comment:$scope.comment,shopId:$scope.shop.id,userId:commonData.userId},id).then(function(response){
        $scope.comment='';
      });
      $scope.closeModal('comment-modal');
    };

    $scope.openModal=function(id){
      $('#'+id).openModal();
    };

    $scope.editRate=function(id){
      var shopId='shopId='+$scope.shop.id;
      var userId='userId='+commonData.userId;
      var api=new $api('ratings'+'?'+shopId+'&'+userId);
      api.list().then(function(response){
        $scope.starRating=response.data.ratings;
         $('#'+id).openModal({
          dismissible: false
        });
      });
    };

    $scope.editComment=function(id,value){
      $scope.comment=value;
      $('#'+id).openModal({
          dismissible: false
      });
    };

    $scope.closeModal=function(id){
      $('#'+id).closeModal();
    };


    $scope.callMap=function(shop){
      $state.go('map',{data: shop});
    };

    $scope.callNumber=function(number){
      window.plugins.CallNumber.callNumber(onSuccess, onError, number);
    };
      var onSuccess=function(){
      }
      var onError=function(){
      }

    $scope.share=function(shop){
      alert(shop);
      var message=shop.description;
      var subject=shop.name;
      var image=shop.banner;
      var link="";
      window.plugins.socialsharing.share(message,subject,image,link);
    };

  	$scope.getItems=function(item){
  		var getItems=new $api(item);
  		getItems.get('1').then(function(response) {
  			$scope.shop=response.data;
        $scope.setCategory($scope.shop.maincategory[0]);
        
		});
  	};
    
    $scope.setCategory=function(cat){
        $scope.mainCategory=cat.name;
    }
  	$scope.getItems("shops");
    
  	

});

  angular.module('routerApp').directive('starRating', function () {
    return {
        scope: {
            rating: '=',
            maxRating: '@',
            readOnly: '@',
            click: "&",
            mouseHover: "&",
            mouseLeave: "&"
        },
        restrict: 'EA',
        template:
            "<div style='display: inline-block; margin: 0px; padding: 0px; cursor:pointer;' ng-repeat='idx in maxRatings track by $index'> \
                    <img ng-src='{{((hoverValue + _rating) <= $index) && \"http://www.codeproject.com/script/ratings/images/star-empty-lg.png\" || \"http://www.codeproject.com/script/ratings/images/star-fill-lg.png\"}}' \
                    ng-Click='isolatedClick($index + 1)' \
                    ng-mouseenter='isolatedMouseHover($index + 1)' \
                    ng-mouseleave='isolatedMouseLeave($index + 1)'></img> \
            </div>",
        compile: function (element, attrs) {
            if (!attrs.maxRating || (Number(attrs.maxRating) <= 0)) {
                attrs.maxRating = '5';
            };
        },
        controller: function ($scope, $element, $attrs) {
            $scope.maxRatings = [];

            for (var i = 1; i <= $scope.maxRating; i++) {
                $scope.maxRatings.push({});
            };

            $scope._rating = $scope.rating;
      
      $scope.isolatedClick = function (param) {
        if ($scope.readOnly == 'true') return;

        $scope.rating = $scope._rating = param;
        $scope.hoverValue = 0;
        $scope.click({
          param: param
        });
      };

      $scope.isolatedMouseHover = function (param) {
        if ($scope.readOnly == 'true') return;

        $scope._rating = 0;
        $scope.hoverValue = param;
        $scope.mouseHover({
          param: param
        });
      };

      $scope.isolatedMouseLeave = function (param) {
        if ($scope.readOnly == 'true') return;

        $scope._rating = $scope.rating;
        $scope.hoverValue = 0;
        $scope.mouseLeave({
          param: param
        });
      };
        }
    };
});