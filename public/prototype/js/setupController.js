(function(){
    angular
        .module("RiskLegacyHCI")
        .controller("SetupController", SetupController);

    function SetupController($scope, $rootScope, $location, uuid2) {

        $scope.addPlayer = addPlayer;
        $scope.removePlayer = removePlayer;
        $scope.clearFormInput = clearFormInput;
        $scope.start = start;
        $scope.$rootScope = $rootScope;
        

        $rootScope.gameStarted = false;

        if (!$rootScope.players) {
            $rootScope.players = [];
        }
    	
        $scope.clearFormInput();

        function clearFormInput() {
            $scope.newForm = {
                "id": uuid2.newguid(),
                "name": "", 
                "faction": "", 
                "startingTerritory": ""
            }
        }

        function addPlayer() {
            if ($scope.newForm.name == "" || $scope.newForm.faction == "" || $scope.newForm.startingTerritory == "") {
                return;
            }
            $rootScope.players.push($scope.newForm);
            $scope.clearFormInput();
        }

        function removePlayer(player) {
            for (playerIdx in $rootScope.players) {
                if ($rootScope.players[playerIdx].id == player.id) {
                    $rootScope.players.splice(playerIdx, 1);
                }
            }
        }

        function start() {
            $rootScope.gameStarted = true;
            $location.path("quick");
        }
    }
})();