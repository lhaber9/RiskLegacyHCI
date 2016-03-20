(function(){
    angular
        .module("RiskLegacyHCI")
        .controller("Page5Controller", Page5Controller);

    function Page5Controller($scope) {
    	$scope.displayElements = [{},{},{},{},{}];
    	console.log($scope.displayElements);
	}
})();
