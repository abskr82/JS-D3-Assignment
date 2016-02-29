var margin ={top:30, right:30, bottom:70, left:20},
    width=1300-margin.left - margin.right ,
    height=600-margin.top-margin.bottom ;

// scale to ordinal because x axis is not numerical
var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);

//scale to numerical value by height
var y = d3.scale.linear().range([height, 0]);

var chart = d3.select("#chart")
              .append("svg")  //append svg element inside #chart
              .attr("width", width+(2*margin.left)+margin.right)    //set width
              .attr("height", height+margin.top+margin.bottom);  //set height

  var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
      return "<strong> Arable land (% of land area):African </strong> <span style='color:red'>" + d.y + "</span>";
    })

chart.call(tip);

var xAxis = d3.svg.axis()
              .scale(x)
              .orient("bottom");  //orient bottom because x-axis will appear below the bars

var yAxis = d3.svg.axis()
              .scale(y)
              .orient("left");

d3.json("jsonOutput/csvDataAfrican.json", function(error, data){
  x.domain(data.map(function(d){ return d.x}));
  y.domain([0, d3.max(data, function(d){return d.y})]);

  var bar = chart.selectAll("g")
                    .data(data)
                  .enter()
                    .append("g")
                    .attr("transform", function(d, i){
                      return "translate("+x(d.x)+", 0)";
                    });


  bar.append("rect")
      .attr("y", function(d) {
        return y(d.y);
      })
      .attr("x", function(d,i){
        return x.rangeBand()+(margin.left/4);
      })
      .attr("height", function(d) {
        return height - y(d.y);
      })
      .attr("width", x.rangeBand())  //set width base on range on ordinal data
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);

  chart.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate("+margin.left+","+ height+")")
        .call(xAxis)
        .selectAll("text")
           .style("text-anchor", "end")
           .attr("dx", "-.8em")
           .attr("dy", ".15em")
           .attr("transform", "rotate(-65)" );

  chart.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate("+margin.left+",0)")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Arable land (% of land area) for African Country");
});

function type(d) {
    d.x = +d.x; // coerce to number
    return d;
  }
