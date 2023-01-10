var dataset = [ [0, 60], [1, 43], [2, 43],
 [3, 56], [4, 45], [5, 62],
 [6, 49] ];
 
 
 // d3.selectAll("rect")
  .on("click", function(event) {
    d3.select(event.currentTarget)
      .attr("stroke", "yellow");
      });
      
      
   d3.select("svg").select("g")
  .selectAll("rect")
  .transition()
  .duration(2000)
  .attr("cy", "25")
  .attr("fill", "lightgreen");