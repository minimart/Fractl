var submitService = angular.module('fractlIndex')
.factory('submitService', function ($http) {

    var entryObject = {
      date: "",
      urges: "",
      whatUrges: {whatUrges1:"", whatUrges2:"", whatUrges3:""},
      emotion1: {emotion:"", intensity: null},
      emotion2: {emotion:"", intensity: null},
      emotion3: {emotion:"", intensity: null},
      emotion4: {emotion:"", intensity: null},
      emotion5: {emotion:"", intensity: null},
      emotion6: {emotion:"", intensity: null},
      drugs: {drug: "", amount: ""},
      dbtSkills: "",
      skillsUsed: "",
      journaling: ""
    };

    var submitItem = function(entryPortion){
      entryObject.entryPortion = entryPortion;
      console.log(entryObject);
    };

    var finalSubmit = function() {
      console.log(entryObject);
      $http.post('/submit-diary-entry', entryObject).then(handleSuccess, handleFailure);
    };

    var handleSuccess = function(response) {
      console.log(response);
    };
    var handleFailure = function(response) {
      console.log('EVERYTHING IS ON FIRE! HERE IS WHY: ', response);
    };



// name on the left is what we call, right is what it is
// no parens to call functions
    return {
      entryObject: entryObject,
      submitItem: submitItem,
      finalSubmit: finalSubmit,
    };

});
