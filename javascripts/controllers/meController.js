app.controller('whoAmIController', ['$scope', 'Network', '$location', function($scope, $network, $location) {


/*    $scope.clickOnMe = function() {
       alert('Bomb has been planted');
    }
*/
   $scope.clickSignUp = function() {
       $location.path("/signup");
    }

}]);
