/* 
 We learned to draw arcs.
*/
var width = 400;
var height= 300;
var margin = 20;
d3.select("#drawing-area")
    .attr("width", width)
    .attr("height", height)
    .style("margin-left", "20px")
    .style("margin-top", "20px");

var da = d3.select("#drawing-area")
var gdp = [
    { 'country': 'Germany', 'color': '#2ca02c',  'value': 3 },
    { 'country': 'Japan', 'color': '#9467bd',  'value': 5 },
    { 'country': 'China', 'color': '#d62728', 'value': 9 },
    { 'country': 'USA', 'color': '#1f77b4', 'value': 17 },
];

var max_gdp = d3.max(gdp, function(o){ return o.value});
var angleScale = d3.scaleLinear()
                   .domain([0,max_gdp])
                   .range([0, 1.5*Math.PI]);

var arc = d3.arc()
    .innerRadius(function(d, i){
        return (i+1)*25;
    })
    .outerRadius(function(d, i){
        return (i+2)*25;
    })
    .startAngle(function(d){
        return angleScale(0);
    })
   .endAngle(function(d){
        return angleScale(d.value);
    });

var g = da.append("g")
    g.selectAll("path")
    .data(gdp)
    .enter()
    .append("path")
    .attr("d", arc)
    .attr("fill", function(d,i){
        return d.color;
    })
    .attr("stroke", "#FFF")
    .attr("stroke-width", "1px");
   

// Text is appended to the group too.
g.selectAll("text")
 .data(gdp)
 .enter()
 .append("text")
 .text(function(d){
    return d.country + " ($" +  d.value + " Trillion)";
  })
 .attr("x", function(d,i){
    return -10;
  })
 .attr("y", function(d,i){
    return -(i+1)*25;
  })
.attr("dy", -8)
 .style("text-anchor", "end")
 .style("font-size", "19px");
// Moving the entire group, including the shapes appended to it using SVG transformation.
g.attr("transform", "translate("+width/2+","+height/2+")");