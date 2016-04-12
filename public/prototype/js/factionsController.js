(function(){
    angular
        .module("RiskLegacyHCI")
        .controller("FactionsController", FactionsController);

    function FactionsController($scope, $rootScope) {

    	$scope.factions = {};
    	$scope.factionNames = [];
    	$scope.update = update;
    	$scope.update();
        
    	function update() {
    		var players = $rootScope.players;
    		for (playerIdx in players) {
    			var player = players[playerIdx];
                console.log(player);
                console.log(player.faction.name);
    			if ($scope.factions[player.faction.name] == null) {
					$scope.factions[player.faction.name] = [];
    			} 
    			$scope.factions[player.faction.name].push(player);
    		}
    		$scope.factionNames = Object.keys($scope.factions);
    	}
	}
})();
