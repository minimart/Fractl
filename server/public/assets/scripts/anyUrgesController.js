angular.module('fractlIndex').controller('anyUrgesController', function($scope, $mdToast, submitService){
  $scope.entryObject = submitService.entryObject;
  var firstUrge = $scope.whatUrges1;
  var secondUrge = $scope.whatUrges2;
  var thirdUrge = $scope.whatUrges3;

$scope.entryObject.whatUrges = firstUrge + ", " + secondUrge+ ", " + thirdUrge;
  // $scope.submitItem = submitService.submitItem(whatUrges);

//GOD WHY DOESNT THIS WORK

  $scope.showSuicideToast = function() {
      // console.log('Clicked!');
      $mdToast.show(
        $mdToast.simple()
          .textContent('Please look at the Emergency Page!')
          .position('bottom left right')
          .hideDelay(6000)
      );
    };


$scope.submitItem = function(urges, whatUrges){
  submitService.submitItem(urges);
  submitService.submitItem(whatUrges);
  console.log(urges);
  console.log(whatUrges);
  console.log(firstUrge);
  console.log(secondUrge);
  console.log(thirdUrge);
};
      $scope.yesUrges = false;


});



// function(entryPortion){
//   entryObject.entryPortion = entryPortion;
//   console.log(entryObject);
// };
