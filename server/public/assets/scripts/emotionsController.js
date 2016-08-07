angular.module('fractlIndex').controller('emotionsController', function($scope, submitService){
  $scope.entryObject = submitService.entryObject;

  $scope.intensityList = [0,1,2,3,4,5,6,7,8,9,10];
  $scope.emotionList = ["anger", "fear", "pain", "shame", "joy", "sadness"];
  $scope.emotionObject = {};
  $scope.itemList = [{}];

  // $scope.emotionSubmit= function(){
  //   $scope.itemList.push($scope.emotionObject);
  //   console.log($scope.itemList);
  //   $scope.emotionObject = {};
  // };

  var emotion1: {emotion:"", intensity: null};
  var emotion2: {emotion:"", intensity: null};
  var emotion3: {emotion:"", intensity: null};
  var emotion4: {emotion:"", intensity: null};
  var emotion5: {emotion:"", intensity: null};
  var emotion6: {emotion:"", intensity: null};

  var $index = $scope.$index;
$scope.emotionSubmit = function(i){
switch(i) {
  case 1:
  emotion1 = {
    emotion: $scope.
    intensity: $scope.
  };
  i++
  break;
  case 2:
  emotion2 = {
    emotion: $scope.
    intensity: $scope.
  };
  i++
  break;
  case 3:
  emotion3 = {
    emotion: $scope.
    intensity: $scope.
  };
  i++
  break;
  case 4:
  emotion4 = {
    emotion: $scope.
    intensity: $scope.
  };
  i++
  break;
  case 5:
  emotion5 = {
    emotion: $scope.
    intensity: $scope.
  };
  i++
  break;
  case 6:
  emotion6 = {
    emotion: $scope.
    intensity: $scope.
  };
  i++
  break;

}
}
});
