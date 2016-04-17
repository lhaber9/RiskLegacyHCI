(function(){
    angular
        .module("RiskLegacyHCI")
        .controller("QuickviewController", QuickviewController);

    function QuickviewController($scope, $rootScope, $location, ListsFactory) {
    	$scope.$rootScope = $rootScope;
		$scope.randomize = randomize;
		$scope.addTerritory = addTerritory;
		$scope.endGame = endGame;
		$scope.showEndConfirm = showEndConfirm;
		$scope.removeTerritory = removeTerritory;
		$scope.goBack = goBack;
		$scope.next = next;
		randomize();

		$scope.territory = "";
		$scope.territories = [];
		$scope.availableTerritories = ListsFactory.availableTerritories().slice();
		$scope.removedTerritories = [];

		$scope.$on('goBack', function(event, args) {
			$scope.goBack();
		});

		$scope.$on('endGame', function(event, args) {
			$scope.showEndConfirm();
		});

		function autoComplete() {
			$( ".territoryInput" ).autocomplete({
	          source: $scope.availableTerritories,
	          messages: {
	                noResults: '',
	                results: function() {}
	            },
	            select: function (event, ui) {
	                 $scope.territory = ui.item.value;                       
	             }  
	        });
		}

		autoComplete()

		function randomize() {
			$scope.rando = Math.floor(Math.random() * 67 + 3);
		}

		function next() {
			randomize();
			$rootScope.players[$rootScope.playerUpIndex].turns[$rootScope.players[$rootScope.playerUpIndex].completedTurns] = $scope.territories;
			$rootScope.players[$rootScope.playerUpIndex].completedTurns += 1;

			var nextPlayerIndex = $rootScope.playerUpIndex + 1;
			if (nextPlayerIndex >= $rootScope.players.length) {
				nextPlayerIndex = 0;
			}

			$rootScope.playerUpIndex = nextPlayerIndex;
			$scope.territory = ""
			$scope.territories = $rootScope.players[$rootScope.playerUpIndex].turns[$rootScope.players[$rootScope.playerUpIndex].completedTurns];

			if (!$scope.territories) {
				$scope.territories = [];
			}

			$scope.availableTerritories = $scope.availableTerritories.concat($scope.removedTerritories);
			$scope.removedTerritories = [];
			autoComplete();
		}

		function goBack() {
			randomize();
			
			var lastPlayerIndex = $rootScope.playerUpIndex - 1;
			if (lastPlayerIndex < 0) {
				lastPlayerIndex = $rootScope.players.length - 1;
			}
			$rootScope.playerUpIndex = lastPlayerIndex;

			$rootScope.players[$rootScope.playerUpIndex].completedTurns -= 1;
			$scope.territory = ""
			$scope.territories = $rootScope.players[$rootScope.playerUpIndex].turns[$rootScope.players[$rootScope.playerUpIndex].completedTurns];
			$scope.availableTerritories = $scope.availableTerritories.concat($scope.removedTerritories);
			$scope.removedTerritories = [];
			autoComplete();
		}

		function addTerritory() {
			if ($scope.territory == "") {
				$( ".territoryInput" ).val("");
				return;
			}

			for (territoryIdx in $scope.availableTerritories) {
                var territory = $scope.availableTerritories[territoryIdx];
                if (territory == $scope.territory) {
                	$scope.removedTerritories.push(territory);
                    $scope.availableTerritories.splice(territoryIdx, 1);
                    break;
                }
            }

			$scope.territories.push($scope.territory);
			$scope.territory = "";
			$( ".territoryInput" ).val("");
		}

		function removeTerritory(territory) {
			for (territoryIdx in $scope.territories) {
                var theTerritory = $scope.territories[territoryIdx];
                if (territory == theTerritory) {
                    $scope.territories.splice(territoryIdx, 1);
                    break;
                }
            }

			$scope.availableTerritories.push(territory);
		}

		function endGame() {
			$location.path("gameOver");
		}

		function showEndConfirm() {
            $("#confirmEndModalButton").click();   
        }
	}
})();
