(function(){
    angular
        .module("RiskLegacyHCI")
        .config(Configuration);

    function Configuration($routeProvider) {
        $routeProvider
            .when("/setup", {
                templateUrl: "../prototype/html/setupView.html",
                controller: "SetupController"
            })
            .when("/quick", {
                templateUrl: "../prototype/html/quickView.html",
                controller: "QuickviewController"
            })
            .when("/gameOver", {
                templateUrl: "../prototype/html/gameOverView.html",
                controller: "GameOverController"
            })
            .when("/rulebook", {
                templateUrl: "../prototype/html/rulebookView.html",
                controller: "RulebookController"
            })
            .when("/factions", {
                templateUrl: "../prototype/html/factionsView.html",
                controller: "FactionsController"
            })
            .when("/envelope", {
                templateUrl: "../prototype/html/envelopeView.html",
                controller: "EnvelopeController"
            })
            .otherwise({
                redirectTo: "/setup"
            });
    }
})();