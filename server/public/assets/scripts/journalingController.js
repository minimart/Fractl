angular.module('fractlIndex').controller('journalingController', function($scope, submitService){
  $scope.entryObject = submitService.entryObject;

  $scope.journalingSubmit = function(){

    $scope.entryObject.journaling = $scope.entryObject.journaling;
    console.log($scope.entryObject);
  };


});
