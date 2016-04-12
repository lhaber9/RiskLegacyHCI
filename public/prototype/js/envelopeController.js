(function(){
    angular
        .module("RiskLegacyHCI")
        .controller("EnvelopeController", EnvelopeController);

    function EnvelopeController($scope) {
    	$scope.displayPacks = [
    		{"num":1, "description": "Open when the 9th Minor City is founded"},
    		{"num":2, "description": "Open when a player is eliminated"},
    		{"num":3, "description": "Open when a person gets to sign the board for a second time"},
    		{"num":4, "description": "Open with the (image) mark is placed on the board"}
    	];
    	$scope.displayPockets = [
    		{"num":1, "description": "Open as soon as 3 Missiles are used during the same combat roll"},
    		{"num":2, "description": "Open when a person is about to place 30+ troops on the board and has at least one Missile"}
    	];
	}
})();
