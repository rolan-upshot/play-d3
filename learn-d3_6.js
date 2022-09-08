/* 
 In this lesson, we add a vertical axis. See lines 70-77. 
 To move the axis to the right side, we use group transformation.
 */

 germany_cup=[
    {'year': 1990, 'goals_for': 15, 'goals_against':5, 'position': 1},
    {'year': 1994, 'goals_for': 9, 'goals_against':7, 'position': 5},
    {'year': 1998, 'goals_for': 8, 'goals_against':6, 'position': 7},
    {'year': 2002, 'goals_for': 14, 'goals_against':3, 'position': 2},
    {'year': 2006, 'goals_for': 14, 'goals_against':6, 'position': 3},
    {'year': 2010, 'goals_for': 16, 'goals_against':5, 'position': 3},
    {'year': 2014, 'goals_for': 18, 'goals_against':4, 'position': 1},
 ];

var width = 400;
var height= 300;
var margin = 20;
d3.select("#drawing-area")
    .attr("width", width)
    .attr("height", height)
    .style("margin-left", "20px");

var xScale = d3.scaleLinear()
    .domain([1988, 2016])
    .range([margin, width-margin]);

var yScale = d3.scaleLinear()
    .domain([0,20])
    .range([height-margin, margin]);

var gen = d3.area()
    .x(function(d){
        return xScale(d['year']);
    })
    .y0(function(d){
        return yScale(d['goals_for']);
    })
    .y1(function(d){
        return yScale(d['goals_against']);
    })
    .curve(d3.curveBumpX)

var da = d3.select("#drawing-area")

da.append("text")
    .style("text-anchor", "middle")
    .attr("x", width/2)
    .attr("y", 20)
    .text("Goals For/Against")

da.append("path")
    .attr("class", "area")
    .attr("d", gen(germany_cup));

da.selectAll(".year-labels")
    .data(germany_cup)
    .enter()
    .append("text")
    .attr("class", "year-labels")
    .attr("x", function(d){
        return xScale(d['year']) - 10;
    })
    .attr("y", function(d){
        return yScale(d['goals_against']) + 20;
    })
    .text(function(d){
        return " " + d['year'] + " ";
    })

    var yAxis = d3.axisLeft()
                .scale(yScale)
                .ticks(10);
   
    da.append("g")
        .attr("transform", "translate("+(width-margin) +",0)" )
        .attr("class", "y axis")
        .call(yAxis)