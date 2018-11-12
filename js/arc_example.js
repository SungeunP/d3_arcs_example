// // main canvas
// var canvas = d3.select("body").append("svg")
// 	.attr("width", 1000)
// 	.attr("height", 1000);

// // temp group_1
// var group_1 = canvas.append("g")
// 	.attr("transform","translate(500,500)");

/// normal arc Example ///
// // 반지름
// var r = 200;

// // 공식에 필요한 원주율?
// var p = Math.PI * 2;

// // d3 arc provider
// // innerRadius : 안쪽 원의 반지름
// // OuterRaius : 바깥쪽 원의 반지름
// // startAngle : 시작지점의 원주율 (원 둘레 원주율 : Math.PI * 2)
// // ex) startAngle = p - 1 시계방향으로부터 p - 1만큼 그려지지 않고 그 다음부터 그려짐
// // endAngle : 끝 지점의 원주율 
// // ex) endAngle = p - 2 반시계 방향으로부터 p - 2만큼 그려지지 않고 그 다음부터 그려짐 
// var arc = d3.arc()
// 	.innerRadius(r - 30)
// 	.outerRadius(r)
// 	.startAngle(0)
// 	.endAngle(p);

// // add path to use arc provider
// group_1.append("path")
// 	.attr("d", arc);

 

/// color group arc Example ///
var data = [10, 50, 80, 50];
var r = 300;

// main canvas
var canvas = d3.select("body").append("svg")
	.attr("width", 1500)
	.attr("height", 1550);

// group_1
var group_1 = canvas.append("g")
	.attr("transform", "translate(750,750)");
	
// // // arc generator
// // 원 생성기
// var arc = d3.arc()
// 	.innerRadius(200)
// 	.outerRadius(r);

// // color
// // var color = d3.

// // pie layout
// // calc startAngle, endAngle
// var pie = d3.pie()
// 	.value(function (d) { return d; });

// var arcs = group_1.selectAll(".arc")
// 	.data(pie(data))
// 	.enter()
// 		.append("g")
// 		.attr("class","arc");
// console.log(arcs.selectAll("g"));
// console.log(arcs);
// 데이터 개수만큼 생성된 그룹에 arc generator를 이용하여 arc 생성
// innerRadius, outerRadius => arc generator value
// startAngle, endAngle => value by pie layout 
// pie(<data:array>)
// arcs.append("path")
// 	.attr("d", arc);


// 프로바이더
var arc = d3.arc()
	.innerRadius(r - 100)
	.outerRadius(r);

// layout pie
var pie = d3.pie()
	.value(function (d) { return d; });

// 데이터에 근거한 arc group 생성
var arcs = group_1.selectAll("g")
	.data(pie(data))
	.enter()
		.append("g")
		.attr("class","arc");

// 프로바이더를 이용한 각각의 group에 arc path 추가!
arcs.append("path")
	.attr("d", arc);


