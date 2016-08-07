angular.module('fractlIndex').controller('newEntryController', function($scope, submitService, moment){

  $scope.entryObject = submitService.entryObject;

  $scope.entryObject.date = new Date();

  $scope.submitItem = function(date){
    var date = $scope.entryObject.date;
    console.log(date);
    submitService.submitItem(date);
  };

});
