(function(){
    angular
        .module("RiskLegacyHCI")
        .controller("SetupController", SetupController);

    function SetupController($scope, $rootScope, $location, uuid2) {

        $scope.addPlayer = addPlayer;
        $scope.removePlayer = removePlayer;
        $scope.clearFormInput = clearFormInput;
        $scope.tryStart = tryStart;
        $scope.doStart = doStart;
        $scope.$rootScope = $rootScope;
        

        $rootScope.gameStarted = false;

        if (!$rootScope.players) {
            $rootScope.players = [];
        }
    	
        $scope.clearFormInput();

        function newPlayerIsEmpty() {
            if ($scope.newForm.name == "" && $scope.newForm.faction == "" && $scope.newForm.startingTerritory == "") {
                return true;
            }
            return false;
        }

        function newPlayerFull() {
            if ($scope.newForm.name == "" || $scope.newForm.faction == "" || $scope.newForm.startingTerritory == "") {
                return false;
            }
            return true;
        }

        function clearFormInput() {
            $scope.newForm = {
                "id": uuid2.newguid(),
                "name": "", 
                "faction": "", 
                "startingTerritory": ""
            }
        }

        function addPlayer() {
            if (!newPlayerFull()) {
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

        function tryStart() {
            if ( $rootScope.players.length == 0 ) {
                $("#confirmEmptyModalButton").click();
                return;
            }
            if ( !newPlayerIsEmpty() ) {
                $("#confirmUnsaveModalButton").click();
                return;
            }
            doStart();
        }

        function doStart() {
            $rootScope.gameStarted = true;
            $rootScope.playerUpIndex = 0;
            $location.path("quick");
        }
    }
})();