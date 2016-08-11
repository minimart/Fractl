angular.module('fractlIndex').controller('reviewController', function($scope, submitService){
  $scope.entryObject = submitService.entryObject;
  var drugs = [];
  $scope.drugs = drugs;
  console.log($scope.entryObject);

  angular.forEach($scope.entryObject.drugs, function(value, key){
    var drugList = value.drugList;
    console.log('Iterating', drugList);
    drugs.push(drugList.drugName, drugList.drugAmount);

  });
  console.log($scope.entryObject);


  $scope.finalSubmit = function(){
    submitService.finalSubmit();
  };
});
