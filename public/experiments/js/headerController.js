(function(){
    angular
        .module("InteractionDesign")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, $location) {
        $scope.$location = $location;
	}
})();