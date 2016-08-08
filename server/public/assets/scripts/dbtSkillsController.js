angular.module('fractlIndex').controller('dbtSkillsController', function($scope, submitService){

    $scope.entryObject = submitService.entryObject;


    $scope.dbtSkillsList = ["Wise Mind", "Observe", "Participate", "Non-Judgemental Stance", "One-Mindfully", "Effectively",
"Objective Effectiveness", "Relationship Effectiveness", "Self Respect Effectiveness", "Sacred Self", "Reduce Vulnerability",
"Build Master", "Build Positive Experiences", "Opposite-to-Emotion-Urge Action", "Distract", "Self Soothe", "Improve the Moment",
"Pros and Cons", "Radical Acceptance", "Dialectical Behavior or Thought", "Walk The Middle Path"];


  $scope.submitDBTEntries = function() {
      $scope.entryObject.dbtSkills = $scope.entryObject.dbtSkills;
      $scope.entryObject.skillsUsed = $scope.entryObject.skillsUsed;
      console.log($scope.entryObject);
    };

});
