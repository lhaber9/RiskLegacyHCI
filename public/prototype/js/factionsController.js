(function(){
    angular
        .module("RiskLegacyHCI")
        .controller("FactionsController", FactionsController);

    function FactionsController($scope) {
    	$scope.displayElements = [{},{},{},{},{}];
    	console.log($scope.displayElements);
	}
})();
