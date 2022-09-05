/*
We draw one circle.
*/
d3.select("#drawing-area")
    .append("circle")
    .attr("cx", "40")
    .attr("cy", "40")
    .attr("r", 40)
    .style("stroke", "black")
    .style("stroke-width", 2)
    .style("fill", "red")