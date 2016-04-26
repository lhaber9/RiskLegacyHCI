(function(){
    angular
        .module("InteractionDesign")
        .controller("FirstVoteController", FirstVoteController);

    function FirstVoteController($scope, $location) {
        $scope.submit = function() {
        	$location.path('/resultsChart');
        }
	}
})();
