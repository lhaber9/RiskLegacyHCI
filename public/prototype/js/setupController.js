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
        $scope.chooseFaction = chooseFaction;

        $scope.$rootScope = $rootScope;
        
        $scope.availableFactions = ["Die Mechaniker", 
                                    "Enclave of the Bear", 
                                    "Imperial Balkania", 
                                    "Khan Industries", 
                                    "The Saharan Republic"];

        $rootScope.gameStarted = false;

        if (!$rootScope.players) {
            $rootScope.players = [];
        }
    	
        $scope.clearFormInput();

        function chooseFaction(faction) {
            $scope.newForm.faction = faction;

            for (factionIdx in $scope.availableFactions) {
                var aFaction = $scope.availableFactions[factionIdx];
                if (aFaction == faction) {
                    // console.log("here");
                    $scope.availableFactions.splice(factionIdx, 1);
                    return;
                }
            }
        }

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
            $scope.availableFactions.push(player.faction);

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