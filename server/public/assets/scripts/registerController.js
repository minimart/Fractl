angular.module('fractlIndex').controller('registerController', function($scope, $http){

$scope.register = function(){
  $http.post('/register', {
    username: $scope.username,
    password: $scope.password
  })
  .then(handleSuccess, handleFailure)

};
function handleSuccess(response){
  console.log("Success!")
};
function handleFailure(response){
  console.log("Failure!")
}

});
