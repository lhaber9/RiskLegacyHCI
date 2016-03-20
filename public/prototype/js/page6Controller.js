(function(){
    angular
        .module("RiskLegacyHCI")
        .controller("Page6Controller", Page6Controller);

    function Page6Controller($scope) {
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
