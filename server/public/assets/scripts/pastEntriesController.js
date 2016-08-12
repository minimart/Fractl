angular.module('fractlIndex').controller('pastEntriesController', function($scope, $http) {

    $scope.myDate = new Date();
    $scope.entryList = entryList;
    var entryList = [];
    $scope.getEntries = function() {
        // console.log($scope.myDate);
        $http.get('/retrieve-diary-entry').then(function(response) {
            var entryList = [];
            $scope.entryList = entryList;
            // console.log(response);
            for (var i = 0; i < response.data[0].entries.length; i++) {

                var responseDate = response.data[0].entries[i].date;
                var shortResponseDate = responseDate.substring(0, 10);
                var myShortDate = $scope.myDate.toISOString();
                var stringMyDate = myShortDate.substring(0, 10);

                if (shortResponseDate == stringMyDate) {
                    entryList.push(response.data[0].entries[i]);
                    // console.log(entryList);
                    $scope.entryList = entryList;
                } else {
                    // console.log(shortResponseDate);
                    // console.log(stringMyDate);
                };
                if (entryList.length === 0){
                  $scope.entryList = "Sorry, no entries found for that date. Please select another.";
                }
            }
        });
    };

});
// response.data[0].entries[index] has these attributes
// .date, .emotion1 through 6, .dbtSkills, .journaling,
// .skillsUsed, .urges, .whatUrges, .drugs.drugList.drugName/.drugAmount
//  2016-08-11T15:56:11.726Z
