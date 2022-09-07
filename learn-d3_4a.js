/* 
 In this lesson,  manually drawing lines*/
var gdp_data = [[10,15],[15,25],[25,30],[10,25]];
var area_width = 200;
var area_height= 200;
d3.select("#drawing-area")
    .attr("width", area_width)
    .attr("height", area_height);

var da = d3.select("#drawing-area")
var lineGraph = da.append("path")
    .attr("d", "M 0,150 L 25,50 L 50,150 L 75, 50 L100,150")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("fill", "#EEE");