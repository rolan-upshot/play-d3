/* 
 In this lesson, we learn path generators and line curve factories.
 */

 data =[0, 25,50,75, 100, 125,150, 175, 200];
var area_width = 200;
var area_height= 200;
d3.select("#drawing-area")
    .attr("width", area_width)
    .attr("height", area_height);

var da = d3.select("#drawing-area")

var gen = d3.line()
    .x(function(d){
        return d;
    })
    .y(function(d){
        if (d%50==0){
            return 150;
        } else{
            return 50;
        }
    })
    .curve(d3.curveBumpX)

var lineGraph = da.append("path")
    .attr("d", gen(data))
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("fill", "#EEE")
