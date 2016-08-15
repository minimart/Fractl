angular.module('fractlIndex').controller('pastEntriesController', function($scope, $http) {

    $scope.myDate = new Date();
    $scope.entryList = entryList;
    var entryList = [];
    $scope.buttonClicked = false;
    $scope.imagePath = "/assets/images/journal.jpg"

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
                    console.log(entryList);
                    $scope.entryList = entryList;
                } else {
                    console.log(shortResponseDate);
                    console.log(stringMyDate);
                };
                if (entryList.length === 0){
                  $scope.entryList = "Sorry, no entries found for that date. Please select another.";
                }
            };
            var drugs = [];

            angular.forEach($scope.entryList[0].drugs, function(value, key){
              var drugList = value.drugList[0];
              console.log('Iterating', drugList);
              if(drugList == null){
              drugs.push("You did not take any medications that day.");
              } else{
              drugs.push(drugList.drugName, drugList.drugAmount);
              }
              console.log(drugs);
            });
            // if (drugs[0] === "You did not take any medications that day."){
            //   var drugs = "You did not take any medications that day.";
            // };

            console.log($scope.entryList);
            $scope.drugs = drugs;
            $scope.buttonClicked = true;
        });

    };

});
// response.data[0].entries[index] has these attributes
// .date, .emotion1 through 6, .dbtSkills, .journaling,
// .skillsUsed, .urges, .whatUrges, .drugs.drugList.drugName/.drugAmount
//  2016-08-11T15:56:11.726Z
