(function(){
    angular
        .module("InteractionDesign")
        .controller("ResultsChartController", ResultsChartController);

    function ResultsChartController($scope, $location) {
        $scope.$location = $location;

        var data1 = [
	        { x: new Date(2012, 00, 1),  y: 12 },
	        { x: new Date(2012, 00, 2),  y: 13 },
	        { x: new Date(2012, 00, 3),  y: 16 },
	        { x: new Date(2012, 00, 4),  y: 37 },
	        { x: new Date(2012, 00, 5),  y: 39 },
	        { x: new Date(2012, 00, 6),  y: 42 },
	        { x: new Date(2012, 00, 7),  y: 25 },
	        { x: new Date(2012, 00, 8),  y: 18 },
	        { x: new Date(2012, 00, 9),  y: 22 },
	        { x: new Date(2012, 00, 10), y: 25 },
	        { x: new Date(2012, 00, 11), y: 25 },
	        { x: new Date(2012, 00, 12), y: 28 }
	    ];

	    var data2 = [
	        { x: new Date(2012, 00, 1),  y: 50 },
	        { x: new Date(2012, 00, 2),  y: 45 },
	        { x: new Date(2012, 00, 3),  y: 40 },
	        { x: new Date(2012, 00, 4),  y: 25 },
	        { x: new Date(2012, 00, 5),  y: 24 },
	        { x: new Date(2012, 00, 6),  y: 29 },
	        { x: new Date(2012, 00, 7),  y: 43 },
	        { x: new Date(2012, 00, 8),  y: 35 },
	        { x: new Date(2012, 00, 9),  y: 34 },
	        { x: new Date(2012, 00, 10), y: 39 },
	        { x: new Date(2012, 00, 11), y: 43 },
	        { x: new Date(2012, 00, 12), y: 48 }
	    ];

	    var data3 = [
	        { x: new Date(2012, 00, 1),  y: 26 },
	        { x: new Date(2012, 00, 2),  y: 25 },
	        { x: new Date(2012, 00, 3),  y: 23 },
	        { x: new Date(2012, 00, 4),  y: 20 },
	        { x: new Date(2012, 00, 5),  y: 17 },
	        { x: new Date(2012, 00, 6),  y: 17 },
	        { x: new Date(2012, 00, 7),  y: 17 },
	        { x: new Date(2012, 00, 8),  y: 18 },
	        { x: new Date(2012, 00, 9),  y: 12 },
	        { x: new Date(2012, 00, 10), y: 8  },
	        { x: new Date(2012, 00, 11), y: 8  },
	        { x: new Date(2012, 00, 12), y: 12 }
	    ];

	    var data4 = [
	        { x: new Date(2012, 00, 1),  y: 25 },
	        { x: new Date(2012, 00, 2),  y: 26 },
	        { x: new Date(2012, 00, 3),  y: 28 },
	        { x: new Date(2012, 00, 4),  y: 28 },
	        { x: new Date(2012, 00, 5),  y: 30 },
	        { x: new Date(2012, 00, 6),  y: 35 },
	        { x: new Date(2012, 00, 7),  y: 25 },
	        { x: new Date(2012, 00, 8),  y: 18 },
	        { x: new Date(2012, 00, 9),  y: 22 },
	        { x: new Date(2012, 00, 10), y: 25 },
	        { x: new Date(2012, 00, 11), y: 25 },
	        { x: new Date(2012, 00, 12), y: 28 }
	    ];

	    var data5 = [
	        { x: new Date(2012, 00, 1),  y: 25 },
	        { x: new Date(2012, 00, 2),  y: 24 },
	        { x: new Date(2012, 00, 3),  y: 45 },
	        { x: new Date(2012, 00, 4),  y: 29 },
	        { x: new Date(2012, 00, 5),  y: 24 },
	        { x: new Date(2012, 00, 6),  y: 29 },
	        { x: new Date(2012, 00, 7),  y: 18 },
	        { x: new Date(2012, 00, 8),  y: 22 },
	        { x: new Date(2012, 00, 9),  y: 25 },
	        { x: new Date(2012, 00, 10), y: 25 },
	        { x: new Date(2012, 00, 11), y: 28 },
	        { x: new Date(2012, 00, 12), y: 28 }
	    ];

	    var data6 = [
	        { x: new Date(2012, 00, 1),  y: 26 },
	        { x: new Date(2012, 00, 2),  y: 25 },
	        { x: new Date(2012, 00, 3),  y: 23 },
	        { x: new Date(2012, 00, 4),  y: 50 },
	        { x: new Date(2012, 00, 5),  y: 25 },
	        { x: new Date(2012, 00, 6),  y: 29 },
	        { x: new Date(2012, 00, 7),  y: 25 },
	        { x: new Date(2012, 00, 8),  y: 28 },
	        { x: new Date(2012, 00, 9),  y: 12 },
	        { x: new Date(2012, 00, 10), y: 8  },
	        { x: new Date(2012, 00, 11), y: 8  },
	        { x: new Date(2012, 00, 12), y: 12 }
	    ];

	    $scope.filters = [
	    	{name: "Age", selected: false, options: [
	    		{name: "18-24", selected: false},
	    		{name: "25-34", selected: false},
	    		{name: "35-49", selected: false},
	    		{name: "50-65", selected: false},
	    		{name: "65+", selected: false}
	    	]},
	    	{name: "Occupation", selected: false, options: [
	    		{name: "Students", selected: false},
	    		{name: "Blue-Collar", selected: false},
	    		{name: "White-Collar", selected: false}
	    	]},
	    	{name: "Gender", selected: false, options: [
	    		{name: "Male", selected: false},
	    		{name: "Female", selected: false}
	    	]},
	    	{name: "State", selected: false, options: [
	    		{name: "Alabama", selected: false},
	    		{name: "Arkansas", selected: false},
	    		{name: "New York", selected: false},
	    		{name: "California", selected: false},
	    		{name: "Massachusetts", selected: false}
	    	]},
	    	{name: "Political Party", selected: false, options: [
	    		{name: "Democrat", selected: false},
	    		{name: "Republican", selected: false}
	    	]},
	    ];

	    $scope.clickFilter = function(filter) {
	    	for (filterIdx in $scope.filters) {
	    		var theFilter = $scope.filters[filterIdx];
	    		if (theFilter.name == filter.name && theFilter.selected == false) {
	    			theFilter.selected = true;
	    		}
	    		else {
	    			theFilter.selected = false;
	    			for (optionIdx in theFilter.options) {
			    		theFilter.options[optionIdx].selected = false;
			    	}
	    		}
	    	}
	    }

	    $scope.clickSubOption = function(filter, subOption) {
	    	for (filterIdx in $scope.filters) {
	    		var theFilter = $scope.filters[filterIdx];
	    		if (theFilter.name == filter.name && theFilter.selected == true) {
	    			for (optionIdx in theFilter.options) {
			    		var option = theFilter.options[optionIdx];
			    		if (option.name == subOption.name && option.selected == false) {
			    			option.selected = true;
			    		}
			    		else {
			    			option.selected = false;
			    		}
			    	}
	    		}
	    	}

	    	if (subOption.name == "18-24" && subOption.selected == true) {
    			reloadChart(data4, data5, data6, false, "Results 18-24");
    		}
    		else {
    			reloadChart(data1, data2, data3, false, "Results");
    		}
	    }

	    function reloadChart(data_1, data_2, data_3, animated, title) {
	    	var chart = new CanvasJS.Chart("chartContainer",
		    {
		      theme: "theme2",
		      title:{
		        text: title
		      },
		      animationEnabled: animated,
		      axisX: {
		        valueFormatString: "MMM",
		        interval:1,
		        intervalType: "month"
		        
		      },
		      axisY:{
		        includeZero: false
		        
		      },
		      data: [
		      {        
		        type: "line",
		        showInLegend: true,
				lineThickness: 2,
				name: "Hillary Clinton",       
		        dataPoints: data_1
		      },
		      {
		      	type: "line",
		        showInLegend: true,
				lineThickness: 2,
				name: "Bernie Sanders",       
		        dataPoints: data_2
		      },
		      {
		      	type: "line",
		        showInLegend: true,
				lineThickness: 2,
				name: "Donald Trump",       
		        dataPoints: data_3
		      }
		      
		      
		      ]
		    });

			chart.render();
	    }

	    reloadChart(data1, data2, data3, true, "Results");
	}
})();