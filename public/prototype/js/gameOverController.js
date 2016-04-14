(function(){
    angular
        .module("RiskLegacyHCI")
        .controller("GameOverController", GameOverController);

    function GameOverController($scope, $rootScope) {
        $scope.$rootScope = $rootScope;
    	$scope.players = [
    		{"num":0, "status": "Won!", "options":["Choose One:",
                                                   "-Name a continent",
                                                   "-Name and found a major city",
                                                   "-Cancel a Scar Card",
                                                   "-Change a continent bonus",
                                                   "-Fortify a city",
                                                   "-Destroy a territory card"]},
    		{"num":1, "status": "Eliminated!"},
    		{"num":2, "status": "Held On!", "options":[ "Choose One:",
                                                        "-Name and found a Minor City",
                                                        "-Upgrade a resource card" ]},
            {"num":3, "status": "Eliminated!"},
    		{"num":4, "status": "Held On!", "options":[ "Choose One:",
                                                        "-Name and found a Minor City",
                                                        "-Upgrade a resource card" ]}
    	];
	}
})();
