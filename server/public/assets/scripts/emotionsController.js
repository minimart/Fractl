angular.module('fractlIndex').controller('emotionsController', function($scope){
  $scope.intensityList = [0,1,2,3,4,5,6,7,8,9,10];
  $scope.emotionList = ["anger", "fear", "pain", "shame", "joy", "sadness"];
  $scope.emotionObject = {};
  $scope.itemList = [{}];

  $scope.emotionSubmit= function(){
    $scope.itemList.push($scope.emotionObject);
    console.log($scope.itemList);
    $scope.emotionObject = {};
  };



});
