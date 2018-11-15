var canvas = d3.select("body").append("svg")
	.attr("width", 1000)
	.attr("height", 1000);

// diagonal
var data = [{
	source: {
		x: 10,
		y: 10
	},
	target: {
		x: 700,
		y: 700
	}
},{
	source: {
		x: 10,
		y: 500
	},
	target: {
		x: 700,
		y: 300
	}
},{
	source: {
		x: 10,
		y: 300
	},
	target: {
		x: 700,
		y: 700
	}
},
];

// diagonal => d3.linkHorizontal
var diagonal = d3.linkHorizontal()
	.x(function (d) { return d.x })
	.y(function (d) { return d.y});

// append diagonal
// canvas.append("path")
// 	.attr("fill","none")
// 	.attr("stroke","black")
// 	.attr("d",diagonal(data));

// append path data
canvas.selectAll("path")
	.data(data)
	.enter()
		.append("path")
		.attr("fill","none")
		.attr("stroke", "black")
		.attr("d",diagonal)