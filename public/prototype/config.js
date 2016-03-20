(function(){
    angular
        .module("RiskLegacyHCI")
        .config(Configuration);

    function Configuration($routeProvider) {
        $routeProvider
            .when("/1", {
                templateUrl: "../prototype/html/page1.html",
                controller: "Page1Controller"
            })
            .when("/2", {
                templateUrl: "../prototype/html/page2.html",
                controller: "Page2Controller"
            })
            .when("/3", {
                templateUrl: "../prototype/html/page3.html",
                controller: "Page3Controller"
            })
            .when("/4", {
                templateUrl: "../prototype/html/page4.html",
                controller: "Page4Controller"
            })
            .when("/5", {
                templateUrl: "../prototype/html/page5.html",
                controller: "Page5Controller"
            })
            .when("/6", {
                templateUrl: "../prototype/html/page6.html",
                controller: "Page6Controller"
            })
            .otherwise({
                redirectTo: "/1"
            });
    }
})();