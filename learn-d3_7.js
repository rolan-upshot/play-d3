/* 
 In this lesson, we drew points/circles, and used
 linkVertical to connect them.
 */

var width = 400;
var height= 300;
var margin = 20;
d3.select("#drawing-area")
    .attr("width", width)
    .attr("height", height)
    .style("margin-left", "20px");

var da = d3.select("#drawing-area")

distros = [
    { 'name': 'Debian', 'year': 1993, 'visits': 1820},
    { 'name': 'Ubuntu', 'year': 2004, 'visits': 1588},
    { 'name': 'Kubuntu', 'year': 2005, 'visits': 363},
    { 'name': 'Mint', 'year': 2006, 'visits': 3069},
    { 'name': 'Knoppix', 'year': 2000,'visits': 219},
];
relations = [
    {'from': 0, 'to': 1},
    {'from': 1, 'to': 2},
    {'from': 2, 'to': 3},
    {'from': 0, 'to': 4},
];
var years_range = function(data){
    y1 = d3.min(data, function(o){ return o.year});
    y2 = d3.max(data, function(o){ return o.year});
    return [y1-1, y2]
}
var visits_range = function(data){
    v1 = d3.min(data, function(o){ return o.visits});
    v2 = d3.max(data, function(o){ return o.visits});
    return [v1, v2]
}
var xScale = d3.scaleLinear()
               .domain(years_range(distros))
               .range([margin, width-margin]);
var yScale = d3.scaleLinear()
               .domain(visits_range(distros))
               .range([height-margin, margin]);
            
da.selectAll(".distrodot")
  .data(distros)
  .enter()
  .append("circle")
  .attr("class", "distrodot")
  .attr("cx", function (d, i) {
    return xScale(d.year);
  })
 .attr("cy", function (d, i) {
    return yScale(d.visits);
  })
 .attr("r", "20")
 .attr("stroke", "#000000")
 .attr("stroke-width", "2px")
 .attr("fill", "#5599FF");


 var gen = d3.linkVertical()
    .source(function(d){
        var x = xScale(distros[d.from].year);
        var y = yScale(distros[d.from].visits);
        return [x, y];
    })
    .target(function(d){
       var x = xScale(distros[d.to].year);
       var y = yScale(distros[d.to].visits);
       return [x, y];
});

da.selectAll("path")
   .data(relations)
   .enter()
   .append("path")
   .attr("d", gen)
   .attr("stroke", "#FF5599")
   .attr("stroke-width", "10px")
   .attr("fill", "none");