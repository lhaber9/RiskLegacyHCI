(function(){
    angular
        .module("RiskLegacyHCI")
        .config(Configuration);

    function Configuration($routeProvider) {
        $routeProvider
            .when("/first", {
                templateUrl: "firstPage",
                controller: "FirstPageController"
            })
            .otherwise({
                redirectTo: "/first"
            });
    }
})();