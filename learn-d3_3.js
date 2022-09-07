/* 
 In this lesson, we learn how to execute animations for transitions
 triggered by a click. See lines 44-53
*/
var gdp_data = [[10,15],[15,25],[25,30],[10,25]];
var area_width = 200;
var area_height= 200;
d3.select("#drawing-area")
    .attr("width", area_width)
    .attr("height", area_height);
var left_margin = right_margin = 10;

var max_gdp = Math.max.apply(Math, gdp_data.map(function(d){
    return Math.max(d[0], d[1]);
}));

var myScale =  d3.scaleLinear().domain([0, max_gdp])
    .range([0, area_width - left_margin - right_margin]);

var vScale = d3.scaleLinear().domain([0, gdp_data.length+1])
    .range([0, area_height]);
var spacing = area_height / (gdp_data.length+1);

 
var spacing = area_height / (gdp_data.length + 1);

var da = d3.select("#drawing-area");

da.selectAll("rect")
    .data(gdp_data)
    .enter()
    .append("rect")
    .attr("y", function(d, i) {
        return vScale(i+1);
    })
    .attr("x", left_margin)
    .attr("width", function(d, i){
        return myScale(d[0]);
    })
    .attr("height", 20)
    .style("fill", "lightgray")
    .style("stroke", "black")
    .style("stroke-width", 1)
    .on('click', function(d, i){
        d3.select(this)
            .style("fill", "blue")
            .transition()
            .delay(100)
            .duration(500)
            .attr("width", function(d,i){
                return myScale(d[1]);
            })
    });
