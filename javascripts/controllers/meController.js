app.controller('whoAmIController', ['$scope', 'Network', '$location', function($scope, $network, $location) {


    $scope.clickOnMe = function() {
        $location.path('/me');
    }

 //   $scope.clickSignUp = function() {
   //     $location.path("/signup");
    //}

}]);
