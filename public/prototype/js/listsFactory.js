(function(){
    angular
        .module("RiskLegacyHCI")
        .factory("ListsFactory", ListsFactory);

    function ListsFactory() {

        var availableFactions = [{"name":"Die Mechaniker","color":"red"},
                                 {"name":"Enclave of the Bear","color":"green"},
                                 {"name":"Imperial Balkania","color":"purple"},
                                 {"name":"Khan Industries","color":"gray"},
                                 {"name":"The Saharan Republic","color":"tan"}];

        var availableTerritories = [ "Afghanistan",
                                        "Alaska", 
                                        "Alberta ",
                                        "Argentina",
                                        "Brazil",
                                        "Central Africa",
                                        "Central America",
                                        "China",
                                        "East Africa",
                                        "Eastern Australia",
                                        "Eastern United States",
                                        "Egypt",
                                        "Great Britain",
                                        "Greenland",
                                        "Iceland",
                                        "India",
                                        "Indonesia",
                                        "Irkutsk",
                                        "Japan",
                                        "Kamchatka",
                                        "Madagascar",
                                        "Middle East",
                                        "Mongolia",
                                        "New Guinea",
                                        "North Africa",
                                        "Northern Europe",
                                        "Northwest Territory",
                                        "Ontario",
                                        "Peru",
                                        "Quebec",
                                        "Scandinavia",
                                        "Siam",
                                        "Siberia",
                                        "South Africa",
                                        "Southern Europe",
                                        "Ukraine",
                                        "Ural",
                                        "Venezuela",
                                        "Western Australia",
                                        "Western Europe",
                                        "Western United States",
                                        "Yakutsk" ];
        return {

            availableFactions: function() {
                return availableFactions;
            },

            availableTerritories: function() {
                return availableTerritories;
            }

        }
	}
})();