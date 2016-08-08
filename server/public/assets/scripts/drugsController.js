angular.module('fractlIndex').controller('drugsController', function($scope, submitService){
  $scope.entryObject = submitService.entryObject;

  $scope.drugList = [{}];
  $scope.drugObject = {};
  $scope.drugSubmit = function() {
    $scope.drugList.push($scope.drugObject);
    console.log($scope.drugList);
    $scope.drugObject = {};
    };

  $scope.allDrugSubmit = function() {
    $scope.entryObject.drugs = $scope.drugList;
    console.log($scope.entryObject);

  }
});
