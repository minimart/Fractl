angular.module('fractlIndex').controller('emotionsController', function($scope, submitService){
  $scope.entryObject = submitService.entryObject;

  $scope.intensityList = [0,1,2,3,4,5,6,7,8,9,10];
  $scope.emotionList = ["Anger", "Fear", "Pain", "Shame", "Joy", "Sadness"];
  $scope.emotionObject = {};
  $scope.itemList = [{}];

  var emotion1= {emotion:"", intensity: null};
  var emotion2= {emotion:"", intensity: null};
  var emotion3= {emotion:"", intensity: null};
  var emotion4= {emotion:"", intensity: null};
  var emotion5= {emotion:"", intensity: null};
  var emotion6= {emotion:"", intensity: null};

  var i = 1
  $scope.emotionSubmit= function(item){

    var emotionVariableObject = {};
    //Example
    console.log(item.emotionObject.emotion);
    console.log(item.emotionObject.intensity);
    emotionObject = {emotion: item.emotionObject.emotion, intensity: item.emotionObject.intensity};
    // console.log(emotionVariableObject);
    switch (i) {
      case 1:
      emotion1 = emotionVariableObject;
      $scope.itemList.push(emotion1);
      i++;
      console.log(i);
      emotionObject = {};
      break;
      case 2:
      emotion2= emotionVariableObject;
      $scope.itemList.push(emotion2);
      i++;
      console.log(i);
      emotionObject = {};
      break;
      case 3:
      emotion3 = emotionVariableObject;
      $scope.itemList.push(emotion3);
      console.log(i);
      i++;
      emotionObject = {};
      break;
      case 4:
      emotion4 = emotionVariableObject;
      $scope.itemList.push(emotion4);
      console.log(i);
      i++;
      emotionObject = {};
      break;
      case 5:
      emotion5 = emotionVariableObject;
      $scope.itemList.push(emotion5);
      console.log(i);
      i++;
      emotionObject = {};
      break;
      case 6:
      emotion6 = emotionVariableObject;
      $scope.itemList.push(emotion6);
      console.log(i);
      i++;
      emotionObject = {};
      console.log($scope.itemList);

      break;
    };


  };

$scope.allEmotionSubmit = function() {
  $scope.entryObject.emotion1 = emotion1;
  $scope.entryObject.emotion2 = emotion2;
  $scope.entryObject.emotion3 = emotion3;
  $scope.entryObject.emotion4 = emotion4;
  $scope.entryObject.emotion5 = emotion5;
  $scope.entryObject.emotion6 = emotion6;
  console.log($scope.entryObject);
}

});
