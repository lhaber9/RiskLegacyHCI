(function(){
    angular
        .module("RiskLegacyHCI")
        .config(Configuration);

    function Configuration($routeProvider) {
        $routeProvider
            .when("/first", {
                templateUrl: "../prototype/html/firstPage.html",
                controller: "FirstPageController"
            })
            .otherwise({
                redirectTo: "/first"
            });
    }
})();