/* In lesson 0, we drew one circle.
In this lesson, for each element in my_data array, we draw a circle with specific attributes and styles.
*/

var my_data = [{cx:40, col:"red"},{cx:80, col:"blue"},{cx:120, col:"yellow"},{cx:160, col:"green"}]
d3.select("#drawing-area")
    .selectAll("circle")
    .data(my_data)
    .enter() // everything after this draws a circle for each my_data item.
    .append("circle")
    .attr("cy", 40)
    .attr("cx", function(d) {
        return d.cx;
    })
    .attr("r", 15)
    .style("fill", function(d){
        return d.col
    })
    .style("stroke", "black")
    .stype("stroke-width", 2);