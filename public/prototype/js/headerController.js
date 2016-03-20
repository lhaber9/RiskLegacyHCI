(function(){
    angular
        .module("RiskLegacyHCI")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, $rootScope, $location) {
        $scope.$location = $location;
        $scope.$rootScope = $rootScope;
    }
})();