(function(){
    angular
        .module("RiskLegacyHCI")
        .controller("FirstPageController", FirstPageController);

    function FirstPageController($scope, $rootScope, $location) {

    	$scope.players = [
    	 	{"_id": "000", "name": "Ryan", "faction": "faction1", "startingTerritory": "territory1"},
    	 	{"_id": "000", "name": "Luke", "faction": "faction2", "startingTerritory": "territory2"},
    	 	{"_id": "000", "name": "Matt", "faction": "faction3", "startingTerritory": "territory3"},
    	 	{"_id": "000", "name": "Spencer", "faction": "faction4", "startingTerritory": "territory4"}
    	];

    }
})();