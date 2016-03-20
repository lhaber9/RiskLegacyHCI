(function(){
    angular
        .module("RiskLegacyHCI")
        .controller("EnvelopeController", EnvelopeController);

    function EnvelopeController($scope) {
    	$scope.displayPacks = [
    		{"num":1},
    		{"num":2},
    		{"num":3},
    		{"num":4}
    	];
    	$scope.displayPockets = [
    		{"num":1},
    		{"num":2}
    	];
	}
})();
