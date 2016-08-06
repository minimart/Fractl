angular.module('fractlIndex').controller('newEntryController', function($scope, submitService, moment){
  $scope.entryObject = submitService.entryObject;
$scope.date = new Date();
});
