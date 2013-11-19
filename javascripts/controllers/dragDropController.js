app.controller('dragDropController', ['$scope', function($scope) {

 $scope.parcours = [
 
{"title":"veni", "article":"je suis venue"},
 
{"title":"vedi", "article":"j'ai vu"},
 
{"title":"vici","article":"j'ai vaincu"}]; 


    $scope.handleDrop = function() {
       alert('Bomb has been planted');
    }


}]);
