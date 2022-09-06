/* 
In the previous lessons we draw circles. 
In this lesson, we draw bars whose lengths are the data values.
But what if we want to make lenghts proportional (but not exacly) the values,
as the values could exceed limits? We use scales, which are functions
which return scaled values. See lines 15 and 34. 
*/
var gdp_data = [17, 9, 5, 3, 34];
var area_width = 200;
var area_height= 200;
var left_margin = right_margin = 10;

var max_gdp = Math.max.apply(Math, gdp_data);

var myScale =  d3.scaleLinear().domain([0, max_gdp]).range([0, area_width - left_margin - right_margin]);

d3.select("#drawing-area")
    .attr("width", area_width)
    .attr("height", area_height);
 
var spacing = area_height / (gdp_data.length + 1);

var da = d3.select("#drawing-area");

da.selectAll("rect")
    .data(gdp_data)
    .enter()
    .append("rect")
    .attr("y", function(d, i) {
        return spacing * (i+1);
    })
    .attr("x", left_margin)
    .attr("width", function(d, i){
        return myScale(d);
    })
    .attr("height", 20)
    .style("fill", "lightgray")
    .style("stroke", "black")
    .style("stroke-width", 2);