// Read config file for filtering data
var config = require("./sampleConfigFile.json");

var countryName = config['Country Name'];
var indicatoreArray = config['Indicator Name'];
var yearStart = config['yearStart'];
var yearEnd = config['yearEnd'];

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream("sample_input.txt")
});


// function variable to return header and index map object
var headerToIndexMap = function(line){
    var headerIndexMapObject = {};
    var lineAfterSplit = line.split(",");
    var lengthOfLineArray = lineAfterSplit.length;
    for (var i = 0; i < lengthOfLineArray; i = i + 1)
    {
        headerIndexMapObject[lineAfterSplit[i]]=i;
    }
    return headerIndexMapObject;
}


var returnValue =function(param){
    return param;
};


// create a main csv data object
var csvDataObject = {};
var lineCount = 1;
var indexCountryName,indexIndicatorName,indexArrayYear = [];
var headerIndexMapObject = {};
var headerLine = [];

lineReader.on('line', function (line) {
  //console.log('Line from file:', line);
  // split text line by line
  var newArrayAfterSplit = line.split(",");

  // check if the line is header line
  if( lineCount == 1){
    headerIndexMapObject = headerToIndexMap(line);
    indexCountryName = headerIndexMapObject['Country Name'];
    indexIndicatorName = headerIndexMapObject['Indicator Name'];
    headerLine = newArrayAfterSplit;
    console.log(indexIndicatorName);
    // indexAge = headerIndexMapObject['age'];
    for (i = parseInt(yearStart); i <= parseInt(yearEnd); i = i + 1){
        indexArrayYear.push(headerIndexMapObject[i]);
    }
    //  console.log(headerIndexMapObject);
  }
  else{
    //   defining these variables for short variable names.
      var x = newArrayAfterSplit[indexCountryName];
      var y = newArrayAfterSplit[indexIndicatorName];
    // check if the contry name is as mentioned in config
    if ( x == countryName ){
        // console.log(newArrayAfterSplit[indexCountryName]);
        // check for another indicator condition
        if ( y == indicatoreArray[0] || y == indicatoreArray[1] || y == indicatoreArray[2]){
            // console.log(newArrayAfterSplit[indexIndicatorName]);
            // initialize multidimentional object if its not initialized
            if( x in csvDataObject == false ){
                csvDataObject[x] = {};
                console.log("check")
                // console.log(csvDataObject);
            }
            // iterate through year to get all the required data
              for ( var i = 0; i < indexArrayYear.length; i = i + 1){
                //   console.log(indexArrayYear[i]);
                z = headerLine[indexArrayYear[i]];
                //  console.log(csvDataObject[x]);
                // console.log(y);
                if (y in csvDataObject[x] == false){
                    csvDataObject[x][y] = {};
                    console.log("dchhhdsb");
                }
                // check for empty elements
                  if ( newArrayAfterSplit[indexArrayYear[i]].length !=0 ){
                    //   console.log(newArrayAfterSplit[indexArrayYear[i]]);

                        // console.log(y);

                      if (csvDataObject[x][y][z] != undefined ){
                          csvDataObject[x][y][z] = parseFloat(csvDataObject[x][y][z]) + parseFloat(newArrayAfterSplit[indexArrayYear[i]]);
                      }
                      else {
                          csvDataObject[x][y][z] = newArrayAfterSplit[indexArrayYear[i]];
                        // console.log(csvDataObject);
                      }
                    // console.log(newArrayAfterSplit[indexArrayYear[i]]);
                } // end of if
              }// end of for loop
      }
    }
  }
  lineCount = lineCount + 1;
    // console.log(csvDataObject);
}).on('close', function(){
    console.log("Done reading file");
    console.log(csvDataObject);
});
