angular.module('fractlIndex').controller('loginController', function($scope, $http, $location){

$scope.login = function(){

$http.post('/login', {
  username: $scope.username,
  password: $scope.password
})
.then(handleSuccess, handleFailure)
;
function handleSuccess(response){
  console.log("Success!");
  console.log(response);
  var user = response.config.data.username;
  console.log(user);
  $location.path('/home');

};
function handleFailure(response){
  console.log("Failure!")
  $location.path('/failure')
}

};

});
