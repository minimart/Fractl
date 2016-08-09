angular.module('fractlIndex').controller('reviewController', function($scope, submitService){
  $scope.entryObject = submitService.entryObject;
  var drugs = [];
  $scope.drugs = drugs;

console.log($scope.entryObject.drugs);
angular.forEach($scope.entryObject.drugs, function(value, key){
  var drugList = value.drugList;
  // console.log(key, value);
  // console.log(drugList.drugName);
  // console.log(drugList.drugAmount);
  drugs.push(drugList.drugName, drugList.drugAmount);

});


});
