angular.module('fractlIndex').controller('anyUrgesController', function($scope, $mdToast){
  $scope.showSuicideToast = function() {
      // console.log('Clicked!');
      $mdToast.show(
        $mdToast.simple()
          .textContent('Please look at the Emergency Page!')
          .position('bottom left right')
          .hideDelay(7000)
      );

    };

      $scope.yesUrges = false;
});
