(function(){
    angular
        .module("RiskLegacyHCI")
        .controller("QuickviewController", QuickviewController);

    function QuickviewController($scope, $rootScope) {
    	$scope.$rootScope = $rootScope;
		$scope.randomize = randomize;
		$scope.next = next;
		randomize();

		function randomize() {
			$scope.rando = Math.floor(Math.random() * 67 + 3);
		}

		function next() {
			randomize();
			var nextPlayerIndex = $rootScope.playerUpIndex + 1;
			if (nextPlayerIndex >= $rootScope.players.length) {
				nextPlayerIndex = 0;
			}
			$rootScope.playerUpIndex = nextPlayerIndex;
		}
	}
})();
