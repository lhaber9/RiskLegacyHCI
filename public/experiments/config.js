(function(){
    angular
        .module("InteractionDesign")
        .config(Configuration);

    function Configuration($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "../experiments/html/home.html",
                controller: "HomeController"
            })
            .when("/firstVote", {
                templateUrl: "../experiments/html/firstVote.html",
                controller: "FirstVoteController"
            })
            .when("/resultsChart", {
                templateUrl: "../experiments/html/resultsChart.html",
                controller: "ResultsChartController"
            })
            .when("/resultsMap", {
                templateUrl: "../experiments/html/resultsMap.html",
                controller: "ResultsMapController"
            })
            .otherwise({
                redirectTo: "/home"
            });
    }
})();