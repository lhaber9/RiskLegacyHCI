(function(){
    angular
        .module("RiskLegacyHCI")
        .controller("FirstPageController", FirstPageController);

    function FirstPageController($scope, $rootScope, $location) {

        $scope.addPlayer = addPlayer;
        $scope.clearFormInput = clearFormInput;

    	$scope.players = [
    	 	{"name": "Ryan", "faction": "faction1", "startingTerritory": "territory1"},
    	 	{"name": "Luke", "faction": "faction2", "startingTerritory": "territory2"},
    	 	{"name": "Matt", "faction": "faction3", "startingTerritory": "territory3"},
    	 	{"name": "Spencer", "faction": "faction4", "startingTerritory": "territory4"}
    	];

        $scope.clearFormInput();

        function clearFormInput() {
            $scope.newForm = {
                "name": "", 
                "faction": "", 
                "startingTerritory": ""
            }
        }

        function addPlayer() {
            if ($scope.newForm.name == "" || $scope.newForm.faction == "" || $scope.newForm.startingTerritory == "") {
                return;
            }

            $scope.players.push($scope.newForm);
            $scope.clearFormInput();
        }
    }
})();