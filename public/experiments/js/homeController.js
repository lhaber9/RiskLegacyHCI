(function(){
    angular
        .module("InteractionDesign")
        .controller("HomeController", HomeController);

    function HomeController($scope, $location) {

        $scope.vote = function() {
            $location.path("/firstVote");
        }

	}
})();
