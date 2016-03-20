(function(){
    angular
        .module("RiskLegacyHCI")
        .controller("Page3Controller", Page3Controller);

    function Page3Controller($scope) {
    	$scope.players = [
    		{"num":1, "status": "Won!", "statusText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    		{"num":2, "status": "Eliminated!", "statusText":""},
    		{"num":3, "status": "Held On!", "statusText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    		{"num":4, "status": "Eliminated!", "statusText":""},
    		{"num":5, "status": "Held On!", "statusText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
    	];
	}
})();
