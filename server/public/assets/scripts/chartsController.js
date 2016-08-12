angular.module('fractlIndex').controller('chartsController', function($scope){
  $http.get('/retrieve-diary-entry').then(function(response) {
    for(var i = 0; i<response.data[0].entries.length; i++){
      
    }
});

});
