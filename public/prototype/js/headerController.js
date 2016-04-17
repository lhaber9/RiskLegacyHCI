(function(){
    angular
        .module("RiskLegacyHCI")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, $rootScope, $location) {
        $scope.$location = $location;
        $scope.$rootScope = $rootScope;

        $scope.goBack = goBack;
        $scope.endGame = endGame;

        function goBack() {
        	$rootScope.$broadcast('goBack');
        }

        function endGame() {
        	$rootScope.$broadcast('endGame');
        }
    }
})();