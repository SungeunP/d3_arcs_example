// main canvas
var canvas = d3.select("body").append("svg")
	.attr("width", 500)
	.attr("height", 500);

// data_1
var data_1 = [
	{
		x : 0,
		y : 500
	},
	{
		x : 100,
		y : 300
	},
	{
		x : 200,
		y : 400
	},
	{
		x : 300,
		y : 100
	}
]

// data_2
var data_2 = [
	{
		x : 0,
		y : 300
	},
	{
		x : 100,
		y : 200
	},
	{
		x : 200,
		y : 450
	},
	{
		x : 300,
		y : 50
	}
]

// line provider
var line = d3.line()
	.x(function (d) { return d.x; })
	.y(function (d) { return d.y; });

// lines group
var group_1 = canvas.append("g");

// path data enter
// 데이터를 enter하기 전에 selectAll을 하는 이유는 빈 selection을 만들어
// d3 selection 객체를 사용하기 위한 하나의 Wrapping 과정이라고 볼 수 있다.
group_1.selectAll("path")
	// 2차원 path data 바인딩
	.data([data_1,
		data_2
	])
	// enter data
	.enter()
		// path를 추가
		.append("path")
		// d3 line provider 등록
		.attr("d", line)
		// styles
		.attr("stroke","black")
		.attr("fill","none")
		.attr("stroke-width",6);