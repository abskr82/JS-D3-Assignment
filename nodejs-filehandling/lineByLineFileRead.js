var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream("input.txt")
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


// create a main csv data object
var csvDataObject = {};
var lineCount = 1;
var indexName,indexAge,indexArrayYear = [];
var headerIndexMapObject = {};

lineReader.on('line', function (line) {
  //console.log('Line from file:', line);
  // split text line by line
  var newArrayAfterSplit = line.split(",");
  // check if the line is header line
  if( lineCount == 1){
    headerIndexMapObject = headerToIndexMap(line);
    indexName = headerIndexMapObject['name'];
    indexAge = headerIndexMapObject['age'];
    for (i = 1960; i <= 1963; i = i + 1){
        indexArrayYear.push(headerIndexMapObject[i]);
    }
    // console.log(headerIndexMapObject);
  }
  else{
    //   var indexName = headerIndexMapObject['name'];
    //   var indexAge = headerIndexMapObject['age'];
    //    console.log(indexArrayYear);
    //   console.log(indexArrayYear);
      for ( var i = 0; i < indexArrayYear.length; i = i + 1){
        //   console.log(indexArrayYear[i]);
          if ( newArrayAfterSplit[indexArrayYear[i]].length !=0 ){
              //console.log(newArrayAfterSplit[indexArrayYear[i]].length);
              if (csvDataObject[newArrayAfterSplit[indexName]] != undefined ){
                  csvDataObject[newArrayAfterSplit[indexName]] =parseFloat(csvDataObject[newArrayAfterSplit[indexName]]) + parseFloat(newArrayAfterSplit[indexArrayYear[i]]);
              }
              else {
                  csvDataObject[newArrayAfterSplit[indexName]] = newArrayAfterSplit[indexArrayYear[i]];
              }
            console.log(newArrayAfterSplit[indexArrayYear[i]]);
          }
          
      }

  }
  lineCount = lineCount + 1;
  console.log(csvDataObject);
});
