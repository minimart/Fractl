angular.module('fractlIndex').controller('pastEntriesController', function($scope, $http){

  $scope.myDate = new Date();
  $scope.entryList = entryList;
  var entryList = [];
  $scope.getEntries = function(){
  $http.get('/retrieve-diary-entry').then(function(response){
    console.log($scope.myDate);
    $scope.entries = response.data[0].entries;
    for(var i=0; i<$scope.entries.length; i++){
      entryList.push(response.data[0].entries[i])
    }
    console.log(entryList);
  });
};

});
// response.data[0].entries[index] has these attributes
// .date, .emotion1 through 6, .dbtSkills, .journaling,
// .skillsUsed, .urges, .whatUrges, .drugs.drugList.drugName/.drugAmount
