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

        $scope.availableTerritories = [ "Afghanistan",
                                        "Alaska", 
                                        "Alberta ",
                                        "Argentina",
                                        "Brazil",
                                        "Central Africa",
                                        "Central America",
                                        "China",
                                        "East Africa",
                                        "Eastern Australia",
                                        "Eastern United States",
                                        "Egypt",
                                        "Great Britain",
                                        "Greenland",
                                        "Iceland",
                                        "India",
                                        "Indonesia",
                                        "Irkutsk",
                                        "Japan",
                                        "Kamchatka",
                                        "Madagascar",
                                        "Middle East",
                                        "Mongolia",
                                        "New Guinea",
                                        "North Africa",
                                        "Northern Europe",
                                        "Northwest Territory",
                                        "Ontario",
                                        "Peru",
                                        "Quebec",
                                        "Scandinavia",
                                        "Siam",
                                        "Siberia",
                                        "South Africa",
                                        "Southern Europe",
                                        "Ukraine",
                                        "Ural",
                                        "Venezuela",
                                        "Western Australia",
                                        "Western Europe",
                                        "Western United States",
                                        "Yakutsk" ];


        function setupAutocomplete() {
            $( ".territoryInput" ).autocomplete({
              source: $scope.availableTerritories,
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

            $( ".territoryInput" ).val("");
        }

        function addPlayer() {
            if (!newPlayerFull()) {
                return;
            }
            $rootScope.players.push($scope.newForm);
            
            for (territoryIdx in $scope.availableTerritories) {
                var territory = $scope.availableTerritories[territoryIdx];
                if (territory == $scope.newForm.startingTerritory) {
                    $scope.availableTerritories.splice(territoryIdx, 1);
                    break;
                }
            }

            for (factionIdx in $scope.availableFactions) {
                var aFaction = $scope.availableFactions[factionIdx];
                if (aFaction == $scope.newForm.faction) {
                    $scope.availableFactions.splice(factionIdx, 1);
                    break;
                }
            }

            // setupAutocomplete(); 
            $scope.clearFormInput();
        }

        function removePlayer(player) {
            $scope.availableFactions.push(player.faction);
            $scope.availableTerritories.push(player.startingTerritory);

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