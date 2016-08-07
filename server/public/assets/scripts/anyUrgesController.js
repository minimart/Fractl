angular.module('fractlIndex').controller('anyUrgesController', function($scope, $mdToast, submitService){
  $scope.entryObject = submitService.entryObject;
  // var firstUrge = $scope.whatUrges1;
  // var secondUrge = $scope.whatUrges2;
  // var thirdUrge = $scope.whatUrges3;

  // $scope.submitItem = submitService.submitItem(whatUrges);

  $scope.showSuicideToast = function() {
      // console.log('Clicked!');
      $mdToast.show(
        $mdToast.simple()
          .textContent('Please look at the Emergency Page!')
          .position('bottom left right')
          .hideDelay(6000)
      );
    };

$scope.submitStuff = function(urges, whatUrges){
  var whatUrges = {whatUrges1: $scope.entryObject.whatUrges.whatUrges1, whatUrges2: $scope.entryObject.whatUrges.whatUrges2, whatUrges3: $scope.entryObject.whatUrges.whatUrges3};
  var urges = $scope.entryObject.urges;
  submitService.submitItem(urges);
  submitService.submitItem(whatUrges);
  console.log(urges);
  console.log(whatUrges);

};
      $scope.yesUrges = false;


});



// function(entryPortion){
//   entryObject.entryPortion = entryPortion;
//   console.log(entryObject);
// };
