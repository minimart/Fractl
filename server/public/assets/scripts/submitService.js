var submitService = angular.module('fractlIndex')
.factory('submitService', function () {

    var entryObject = {
      date: "",
      urges: "",
      whatUrges: "",
      emotions: {emotion:"", intensity: null},
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
      $http.post('/submit-diary-entry').then(handleSuccess, handleFailure);
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
      finalSubmit: finalSubmit
    };

});
