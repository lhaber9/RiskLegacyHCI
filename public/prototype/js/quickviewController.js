(function(){
    angular
        .module("RiskLegacyHCI")
        .controller("QuickviewController", QuickviewController);

    function QuickviewController($scope) {
		$scope.randomize = randomize;
		randomize();

		function randomize() {
			$scope.rando = Math.floor(Math.random() * 67 + 3);
		}
	}
})();
