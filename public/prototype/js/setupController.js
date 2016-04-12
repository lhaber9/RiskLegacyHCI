(function(){
    angular
        .module("RiskLegacyHCI")
        .controller("SetupController", SetupController);

    function SetupController($scope, $rootScope, $location, uuid2, ListsFactory) {

        $scope.addPlayer = addPlayer;
        $scope.removePlayer = removePlayer;
        $scope.clearFormInput = clearFormInput;
        $scope.tryStart = tryStart;
        $scope.doStart = doStart;
        $scope.chooseFaction = chooseFaction;

        $scope.$rootScope = $rootScope;

        if ($rootScope.availableFactions == null) {
            $rootScope.availableFactions = ListsFactory.availableFactions().slice();
        }
        if ($rootScope.availableTerritories == null) {
            $rootScope.availableTerritories = ListsFactory.availableTerritories().slice();
        }

        function setupAutocomplete() {
            $( ".territoryInput" ).autocomplete({
              source: $rootScope.availableTerritories,
              messages: {
                    noResults: '',
                    results: function() {}
                },
                select: function (event, ui) {
                     $scope.newForm.startingTerritory = ui.item.value;                       
                 }  
            });
        }

        $rootScope.gameStarted = false;

        if (!$rootScope.players) {
            $rootScope.players = [];
        }
    	
        $scope.clearFormInput();
        setupAutocomplete();

        function chooseFaction(faction) {
            $scope.newForm.faction = faction;
        }

        function newPlayerIsEmpty() {
            if ($scope.newForm.name == "" && $scope.newForm.faction.name == "" && $scope.newForm.startingTerritory == "") {
                return true;
            }
            return false;
        }

        function newPlayerFull() {
            if ($scope.newForm.name == "" || $scope.newForm.faction.name == "" || $scope.newForm.startingTerritory == "") {
                return false;
            }
            return true;
        }

        function clearFormInput() {
            $scope.newForm = {
                "id": uuid2.newguid(),
                "name": "", 
                "faction": {"name":"", "color":""}, 
                "startingTerritory": ""
            }

            $( ".territoryInput" ).val("");
        }

        function addPlayer() {
            if (!newPlayerFull()) {
                return;
            }
            $rootScope.players.push($scope.newForm);
            
            for (territoryIdx in $rootScope.availableTerritories) {
                var territory = $rootScope.availableTerritories[territoryIdx];
                if (territory == $scope.newForm.startingTerritory) {
                    $rootScope.availableTerritories.splice(territoryIdx, 1);
                    break;
                }
            }

            for (factionIdx in $rootScope.availableFactions) {
                var aFaction = $rootScope.availableFactions[factionIdx];
                console.log(aFaction);
                console.log($scope.newForm.faction);
                if (aFaction.name == $scope.newForm.faction.name) {
                    $rootScope.availableFactions.splice(factionIdx, 1);
                    break;
                }
            }

            // setupAutocomplete(); 
            $scope.clearFormInput();
        }

        function removePlayer(player) {
            $rootScope.availableFactions.push(player.faction);
            $rootScope.availableTerritories.push(player.startingTerritory);

            for (playerIdx in $rootScope.players) {
                if ($rootScope.players[playerIdx].id == player.id) {
                    $rootScope.players.splice(playerIdx, 1);
                }
            }

            // setupAutocomplete();
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