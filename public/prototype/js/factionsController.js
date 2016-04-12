(function(){
    angular
        .module("RiskLegacyHCI")
        .controller("FactionsController", FactionsController);

    function FactionsController($scope, $rootScope) {

    	$scope.factionInfo = {};
        $scope.factions = [];
    	$scope.update = update;
    	$scope.update();

    	function update() {
    		var players = $rootScope.players;
    		for (playerIdx in players) {
    			var player = players[playerIdx];
                console.log(player);
                console.log(player.faction.name);
    			if ($scope.factionInfo[player.faction.name] == null) {
					$scope.factionInfo[player.faction.name] = [];
                    $scope.factions.push(player.faction);
    			} 
    			$scope.factionInfo[player.faction.name].push(player);
    		}
    	}
	}
})();
