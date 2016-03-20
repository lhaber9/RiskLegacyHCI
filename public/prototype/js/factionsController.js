(function(){
    angular
        .module("RiskLegacyHCI")
        .controller("FactionsController", FactionsController);

    function FactionsController($scope, $rootScope) {

    	$scope.factions = {};
    	$scope.factionNames = [];
    	$scope.update = update;
    	$scope.update();

    	console.log("here");

    	function update() {
    		var players = $rootScope.players;
    		for (playerIdx in players) {
    			var player = players[playerIdx];
    			if ($scope.factions[player.faction] == null) {
					$scope.factions[player.faction] = [];
    			} 
    			$scope.factions[player.faction].push(player);
    		}
    		$scope.factionNames = Object.keys($scope.factions);
    	}
	}
})();
