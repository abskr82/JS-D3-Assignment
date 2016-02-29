function InitChart() {

var data = [{"continent":"Asia","year":"1961","value":402909500},{"continent":"Asia","year":"1962","value":404168800},{"continent":"Asia","year":"1963","value":406177200},{"continent":"Asia","year":"1964","value":407237000},{"continent":"Asia","year":"1965","value":408682400},{"continent":"Asia","year":"1966","value":408761100},{"continent":"Asia","year":"1967","value":409564500},{"continent":"Asia","year":"1968","value":409200600},{"continent":"Asia","year":"1969","value":408289800},{"continent":"Asia","year":"1970","value":408731400},{"continent":"Asia","year":"1971","value":406575700},{"continent":"Asia","year":"1972","value":408620200},{"continent":"Asia","year":"1973","value":410212700},{"continent":"Asia","year":"1974","value":411307500},{"continent":"Asia","year":"1975","value":410103400},{"continent":"Asia","year":"1976","value":410823400},{"continent":"Asia","year":"1977","value":412009400},{"continent":"Asia","year":"1978","value":414256000},{"continent":"Asia","year":"1979","value":415381300},{"continent":"Asia","year":"1980","value":415480700},{"continent":"Asia","year":"1981","value":415772600},{"continent":"Asia","year":"1982","value":422112100},{"continent":"Asia","year":"1983","value":424751900},{"continent":"Asia","year":"1984","value":434487700},{"continent":"Asia","year":"1985","value":442323200},{"continent":"Asia","year":"1986","value":442194200},{"continent":"Asia","year":"1987","value":444963600},{"continent":"Asia","year":"1988","value":444347100},{"continent":"Asia","year":"1989","value":446388600},{"continent":"Asia","year":"1990","value":446453300},{"continent":"Asia","year":"1991","value":445592400},{"continent":"Asia","year":"1992","value":488261300},{"continent":"Asia","year":"1993","value":486906100},{"continent":"Asia","year":"1994","value":484017800},{"continent":"Asia","year":"1995","value":482240700},{"continent":"Asia","year":"1996","value":479430200},{"continent":"Asia","year":"1997","value":480215500},{"continent":"Asia","year":"1998","value":480495500},{"continent":"Asia","year":"1999","value":480120600},{"continent":"Asia","year":"2000","value":476908200},{"continent":"Asia","year":"2001","value":473727600},{"continent":"Asia","year":"2002","value":471126800},{"continent":"Asia","year":"2003","value":469071900},{"continent":"Asia","year":"2004","value":470638100},{"continent":"Asia","year":"2005","value":469606560},{"continent":"Asia","year":"2006","value":463056600},{"continent":"Asia","year":"2007","value":461924000},{"continent":"Asia","year":"2008","value":460463780},{"continent":"Asia","year":"2009","value":460584010},{"continent":"Asia","year":"2010","value":459804470},{"continent":"Asia","year":"2011","value":459624740},{"continent":"Asia","year":"2012","value":460046010},{"continent":"Asia","year":"2013","value":461600080},{"continent":"America","year":"1961","value":305447600},{"continent":"America","year":"1962","value":304764500},{"continent":"America","year":"1963","value":310350500},{"continent":"America","year":"1964","value":310854600},{"continent":"America","year":"1965","value":311653600},{"continent":"America","year":"1966","value":312671600},{"continent":"America","year":"1967","value":313239600},{"continent":"America","year":"1968","value":323440500},{"continent":"America","year":"1969","value":334676500},{"continent":"America","year":"1970","value":335645500},{"continent":"America","year":"1971","value":337101500},{"continent":"America","year":"1972","value":338232500},{"continent":"America","year":"1973","value":339285500},{"continent":"America","year":"1974","value":340881800},{"continent":"America","year":"1975","value":342417500},{"continent":"America","year":"1976","value":344070500},{"continent":"America","year":"1977","value":345822500},{"continent":"America","year":"1978","value":348519500},{"continent":"America","year":"1979","value":349604200},{"continent":"America","year":"1980","value":350233000},{"continent":"America","year":"1981","value":351318800},{"continent":"America","year":"1982","value":352898500},{"continent":"America","year":"1983","value":353560200},{"continent":"America","year":"1984","value":353763500},{"continent":"America","year":"1985","value":354462200},{"continent":"America","year":"1986","value":356010200},{"continent":"America","year":"1987","value":355070900},{"continent":"America","year":"1988","value":355413900},{"continent":"America","year":"1989","value":356508900},{"continent":"America","year":"1990","value":358107900},{"continent":"America","year":"1991","value":360169800},{"continent":"America","year":"1992","value":358716800},{"continent":"America","year":"1993","value":358037800},{"continent":"America","year":"1994","value":358132600},{"continent":"America","year":"1995","value":363636200},{"continent":"America","year":"1996","value":360795200},{"continent":"America","year":"1997","value":360160200},{"continent":"America","year":"1998","value":360094000},{"continent":"America","year":"1999","value":359182700},{"continent":"America","year":"2000","value":359571500},{"continent":"America","year":"2001","value":361077300},{"continent":"America","year":"2002","value":360550500},{"continent":"America","year":"2003","value":364073400},{"continent":"America","year":"2004","value":364205300},{"continent":"America","year":"2005","value":365193370},{"continent":"America","year":"2006","value":362505180},{"continent":"America","year":"2007","value":364449790},{"continent":"America","year":"2008","value":365011600},{"continent":"America","year":"2009","value":360602770},{"continent":"America","year":"2010","value":360918970},{"continent":"America","year":"2011","value":358515220},{"continent":"America","year":"2012","value":366533940},{"continent":"America","year":"2013","value":366920600},{"continent":"Europe","year":"1961","value":124132800},{"continent":"Europe","year":"1962","value":123843800},{"continent":"Europe","year":"1963","value":123325100},{"continent":"Europe","year":"1964","value":122508600},{"continent":"Europe","year":"1965","value":121739600},{"continent":"Europe","year":"1966","value":120652600},{"continent":"Europe","year":"1967","value":120118900},{"continent":"Europe","year":"1968","value":119391600},{"continent":"Europe","year":"1969","value":119086200},{"continent":"Europe","year":"1970","value":118023000},{"continent":"Europe","year":"1971","value":115622900},{"continent":"Europe","year":"1972","value":115152800},{"continent":"Europe","year":"1973","value":114506700},{"continent":"Europe","year":"1974","value":114424900},{"continent":"Europe","year":"1975","value":113975000},{"continent":"Europe","year":"1976","value":113674600},{"continent":"Europe","year":"1977","value":113648900},{"continent":"Europe","year":"1978","value":113889900},{"continent":"Europe","year":"1979","value":113639200},{"continent":"Europe","year":"1980","value":113581400},{"continent":"Europe","year":"1981","value":113484600},{"continent":"Europe","year":"1982","value":113489300},{"continent":"Europe","year":"1983","value":112997200},{"continent":"Europe","year":"1984","value":113332200},{"continent":"Europe","year":"1985","value":113341500},{"continent":"Europe","year":"1986","value":113361600},{"continent":"Europe","year":"1987","value":113547800},{"continent":"Europe","year":"1988","value":113063200},{"continent":"Europe","year":"1989","value":112103600},{"continent":"Europe","year":"1990","value":111860800},{"continent":"Europe","year":"1991","value":111144300},{"continent":"Europe","year":"1992","value":291646400},{"continent":"Europe","year":"1993","value":293251100},{"continent":"Europe","year":"1994","value":291281400},{"continent":"Europe","year":"1995","value":288966600},{"continent":"Europe","year":"1996","value":287898800},{"continent":"Europe","year":"1997","value":289144500},{"continent":"Europe","year":"1998","value":286577000},{"continent":"Europe","year":"1999","value":284507400},{"continent":"Europe","year":"2000","value":283761200},{"continent":"Europe","year":"2001","value":280239900},{"continent":"Europe","year":"2002","value":278832100},{"continent":"Europe","year":"2003","value":276764130},{"continent":"Europe","year":"2004","value":276406900},{"continent":"Europe","year":"2005","value":275328650},{"continent":"Europe","year":"2006","value":278355220},{"continent":"Europe","year":"2007","value":276926020},{"continent":"Europe","year":"2008","value":277389400},{"continent":"Europe","year":"2009","value":277376790},{"continent":"Europe","year":"2010","value":273529810},{"continent":"Europe","year":"2011","value":274458960},{"continent":"Europe","year":"2012","value":274616650},{"continent":"Europe","year":"2013","value":276807570},{"continent":"Africa","year":"1961","value":142531510},{"continent":"Africa","year":"1962","value":143959000},{"continent":"Africa","year":"1963","value":147860910},{"continent":"Africa","year":"1964","value":149737070},{"continent":"Africa","year":"1965","value":152998130},{"continent":"Africa","year":"1966","value":151206990},{"continent":"Africa","year":"1967","value":153969870},{"continent":"Africa","year":"1968","value":155518950},{"continent":"Africa","year":"1969","value":161903030},{"continent":"Africa","year":"1970","value":159450470},{"continent":"Africa","year":"1971","value":159872560},{"continent":"Africa","year":"1972","value":155672000},{"continent":"Africa","year":"1973","value":160941000},{"continent":"Africa","year":"1974","value":156424000},{"continent":"Africa","year":"1975","value":157017000},{"continent":"Africa","year":"1976","value":158122000},{"continent":"Africa","year":"1977","value":152697000},{"continent":"Africa","year":"1978","value":152436000},{"continent":"Africa","year":"1979","value":151276000},{"continent":"Africa","year":"1980","value":153199000},{"continent":"Africa","year":"1981","value":149825000},{"continent":"Africa","year":"1982","value":151312000},{"continent":"Africa","year":"1983","value":151785000},{"continent":"Africa","year":"1984","value":155989000},{"continent":"Africa","year":"1985","value":160315000},{"continent":"Africa","year":"1986","value":165824000},{"continent":"Africa","year":"1987","value":166112000},{"continent":"Africa","year":"1988","value":167334000},{"continent":"Africa","year":"1989","value":168543000},{"continent":"Africa","year":"1990","value":170182000},{"continent":"Africa","year":"1991","value":173491000},{"continent":"Africa","year":"1992","value":175740000},{"continent":"Africa","year":"1993","value":179184000},{"continent":"Africa","year":"1994","value":180948000},{"continent":"Africa","year":"1995","value":185496000},{"continent":"Africa","year":"1996","value":188485000},{"continent":"Africa","year":"1997","value":189477000},{"continent":"Africa","year":"1998","value":190084000},{"continent":"Africa","year":"1999","value":192446000},{"continent":"Africa","year":"2000","value":192121000},{"continent":"Africa","year":"2001","value":191131920},{"continent":"Africa","year":"2002","value":194034080},{"continent":"Africa","year":"2003","value":201098370},{"continent":"Africa","year":"2004","value":201711610},{"continent":"Africa","year":"2005","value":206166920},{"continent":"Africa","year":"2006","value":207098130},{"continent":"Africa","year":"2007","value":209680600},{"continent":"Africa","year":"2008","value":213960570},{"continent":"Africa","year":"2009","value":212029140},{"continent":"Africa","year":"2010","value":214938600},{"continent":"Africa","year":"2011","value":217253850},{"continent":"Africa","year":"2012","value":225579460},{"continent":"Africa","year":"2013","value":220566230},{"continent":"Oceania","year":"1961","value":33405000},{"continent":"Oceania","year":"1962","value":35316000},{"continent":"Oceania","year":"1963","value":36239000},{"continent":"Oceania","year":"1964","value":38580000},{"continent":"Oceania","year":"1965","value":40165000},{"continent":"Oceania","year":"1966","value":42813000},{"continent":"Oceania","year":"1967","value":44480000},{"continent":"Oceania","year":"1968","value":44576000},{"continent":"Oceania","year":"1969","value":44694000},{"continent":"Oceania","year":"1970","value":44816500},{"continent":"Oceania","year":"1971","value":44314000},{"continent":"Oceania","year":"1972","value":43820000},{"continent":"Oceania","year":"1973","value":43387000},{"continent":"Oceania","year":"1974","value":45275000},{"continent":"Oceania","year":"1975","value":45323000},{"continent":"Oceania","year":"1976","value":45126000},{"continent":"Oceania","year":"1977","value":44125000},{"continent":"Oceania","year":"1978","value":45544000},{"continent":"Oceania","year":"1979","value":46923500},{"continent":"Oceania","year":"1980","value":46980000},{"continent":"Oceania","year":"1981","value":45918000},{"continent":"Oceania","year":"1982","value":49274000},{"continent":"Oceania","year":"1983","value":47765600},{"continent":"Oceania","year":"1984","value":50015000},{"continent":"Oceania","year":"1985","value":50058000},{"continent":"Oceania","year":"1986","value":49785400},{"continent":"Oceania","year":"1987","value":49952700},{"continent":"Oceania","year":"1988","value":49927000},{"continent":"Oceania","year":"1989","value":50655500},{"continent":"Oceania","year":"1990","value":50979000},{"continent":"Oceania","year":"1991","value":48504000},{"continent":"Oceania","year":"1992","value":49730200},{"continent":"Oceania","year":"1993","value":48685200},{"continent":"Oceania","year":"1994","value":49462200},{"continent":"Oceania","year":"1995","value":42133500},{"continent":"Oceania","year":"1996","value":38301000},{"continent":"Oceania","year":"1997","value":41886000},{"continent":"Oceania","year":"1998","value":46063400},{"continent":"Oceania","year":"1999","value":47542800},{"continent":"Oceania","year":"2000","value":49261500},{"continent":"Oceania","year":"2001","value":51770500},{"continent":"Oceania","year":"2002","value":48747300},{"continent":"Oceania","year":"2003","value":47934140},{"continent":"Oceania","year":"2004","value":48647100},{"continent":"Oceania","year":"2005","value":50320100},{"continent":"Oceania","year":"2006","value":48616500},{"continent":"Oceania","year":"2007","value":45070800},{"continent":"Oceania","year":"2008","value":44981760},{"continent":"Oceania","year":"2009","value":46635800},{"continent":"Oceania","year":"2010","value":43614300},{"continent":"Oceania","year":"2011","value":48696000},{"continent":"Oceania","year":"2012","value":48169500},{"continent":"Oceania","year":"2013","value":47313700}];

// var data =

// d3.json("json_data.json", function(error, data1) {
//     console.log(data1);
// });
var dataGroup = d3.nest()
    .key(function(d) {return d.continent;})
    .entries(data);

// console.log(JSON.stringify(dataGroup));
var color = d3.scale.category10();
var vis = d3.select("#visualisation"),
    WIDTH = 1000,
    HEIGHT = 500,
    MARGINS = {
        top: 50,
        right: 20,
        bottom: 50,
        left: 80
    },
    lSpace = WIDTH/dataGroup.length;
    xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([d3.min(data, function(d) {
        return d.year;
    }), d3.max(data, function(d) {
        return d.year;
    })]),
    yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([d3.min(data, function(d) {
        return d.value;
    }), d3.max(data, function(d) {
        return d.value;
    })]),
    xAxis = d3.svg.axis()
    .scale(xScale),
    yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

vis.append("svg:g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
    .call(xAxis);
vis.append("svg:g")
    .attr("class", "y axis")
    .attr("transform", "translate(" + (MARGINS.left) + ",0)")
    .call(yAxis);

var lineGen = d3.svg.line()
    .x(function(d) {
        return xScale(d.year);
    })
    .y(function(d) {
        return yScale(d.value);
    })
    .interpolate("basis");
dataGroup.forEach(function(d,i) {
    vis.append('svg:path')
    .attr('d', lineGen(d.values))
    .attr('stroke', function(d,j) {
            return "hsl(" + Math.random() * 360 + ",100%,50%)";
    })
    .attr('stroke-width', 2)
    .attr('id', 'line_'+d.key)
    .attr('fill', 'none');
    vis.append("text")
        .attr("x", (lSpace/2)+i*lSpace)
        .attr("y", HEIGHT)
        .style("fill", "black")
        .attr("class","legend")
        .on('click',function(){
            var active   = d.active ? false : true;
            var opacity = active ? 0 : 1;
            d3.select("#line_" + d.key).style("opacity", opacity);
            d.active = active;
        })
        .text(d.key);
    });


}

InitChart();
