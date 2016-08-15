angular.module('fractlIndex').controller('journalingController', function($scope, submitService, $mdDialog){
  $scope.entryObject = submitService.entryObject;

  $scope.journalingSubmit = function(){

    $scope.entryObject.journaling = $scope.entryObject.journaling;
    console.log($scope.entryObject);
  };
  $scope.showAlert = function showAlert() {
       alert = $mdDialog.alert({
         title: 'Journaling Ideas',
         textContent: 'Try writing about the most memorable moments in your life this week. Be sure to include as much detail as possible, and why it is so unforgettable for you. ',
         ok: 'Okay, I am ready to journal!'
       });
       $mdDialog
         .show( alert )
         .finally(function() {
           alert = undefined;
         });
     }
});
