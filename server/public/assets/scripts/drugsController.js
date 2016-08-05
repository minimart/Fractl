angular.module('fractlIndex').controller('drugsController', function($scope){
// $scope.inputList = [];
$scope.drugList = [{}];
$scope.drugObject = {};
$scope.drugSubmit = function() {
  $scope.drugList.push($scope.drugObject);
  console.log($scope.drugList);
  $scope.drugObject = {};
};
});
  
