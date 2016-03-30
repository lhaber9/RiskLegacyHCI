(function(){
    angular
        .module("RiskLegacyHCI")
        .controller("RulebookController", RulebookController);

    function RulebookController($scope) {
    	
    	$scope.didChange = didChange;

		$scope.text = ""
		$scope.results = [];

		function didChange() {
			//searching
		}
	}
})();
