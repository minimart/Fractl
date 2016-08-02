angular.module('fractlIndex').controller('anyUrgesController', function($scope, $mdToast){
  $scope.showSuicideToast = function() {
      // var pinTo = $scope.getToastPosition();
      $mdToast.show(
        $mdToast.simple()
          .textContent('Please look at the Emergency Page!')
          .position('top right')
          .hideDelay(3000)
      );
    };
});
