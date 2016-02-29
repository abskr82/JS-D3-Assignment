( function somefunction(){

    // read african country list to the file
    var lineReader = require('readline').createInterface({
      input: require('fs').createReadStream("africanCountry.txt")
    });
    africanCountryList = [];
    lineReader.on('line', function (line) {
        africanCountryList.push(line);
        // console.log(line);
    }).on('close',function(){
        //  console.log(africanCountryList);
        // read continent lookup file
        var lineReader = require('readline').createInterface({
          input: require('fs').createReadStream("continentLookup.csv")
        });
        continentLookupArray = [];
        lineReader.on('line', function (line) {
            continentLookupArray.push(line);
        }).on('close', function(){
            console.log(continentLookupArray);
            // console.log(africanCountryList);

            // Now read
            var config = require("./sampleConfigFile.json");

            var countryName = config['Country Name'];
            var indicatoreArray = config['Indicator Name'];
            var yearStart = config['yearStart'];
            var yearEnd = config['yearEnd'];

            var lineReader = require('readline').createInterface({
              input: require('fs').createReadStream("csvDataFile/WDI_Data.csv")
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
            var csvDataObjectAfrican = {};
            var csvDataContinentWise = {};
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
                    }//end of if
                } // end of if countryName
                // check if the variable is a african country
                else if ( include(africanCountryList, x) ) {
                    // yes its an african country
                    console.log("******************");
                    // console.log(y);
                    // Arable land (% of land area) in 2010
                    // now check if this line has "Arable land (% of land area)" indicator

                    if ( y == "Arable land (% of land area)"){
                        //yes it has "Arable land (% of land area) indicator"
                        // now get the index for "2010"
                        var indexForYear = headerIndexMapObject['2010'];
                        console.log(indexForYear);
                        console.log(newArrayAfterSplit[indexForYear]);
                        csvDataObjectAfrican

                        if (csvDataObjectAfrican[x] != undefined ){
                            csvDataObjectAfrican[x] = parseFloat(csvDataObjectAfrican[x]) + parseFloat(newArrayAfterSplit[indexForYear]);
                        }
                        else {
                            csvDataObjectAfrican[x] = newArrayAfterSplit[indexForYear];
                          // console.log(csvDataObject);
                        }
                    }//end of if
                }//end of else if


                // here we will write code for last problem
                // console.log(lineCount);
// csvDataContinentWise
                //  now find the indicator value for "Arable land (hectares)"

                if ( y == "Arable land (hectares)"){
                    // get continent name
                    var continentName = getContinent(x,continentLookupArray);
                    console.log(continentName);
                    // if( continentName in csvDataContinentWise == false ){
                    //     csvDataContinentWise[continentName] = {};
                    // }
                    for ( var i = 0; i < indexArrayYear.length; i = i + 1){

                      // check for empty elements
                        if ( newArrayAfterSplit[indexArrayYear[i]].length !=0 ){
                            if (csvDataContinentWise[continentName] != undefined ){
                                csvDataContinentWise[continentName] = parseFloat(csvDataContinentWise[continentName]) + parseFloat(newArrayAfterSplit[indexArrayYear[i]]);
                            }
                            else {
                                csvDataContinentWise[continentName] = newArrayAfterSplit[indexArrayYear[i]];
                                console.log(newArrayAfterSplit[indexArrayYear[i]]);
                                console.log(csvDataContinentWise);
                              // console.log(csvDataObject);
                            }
                          // console.log(newArrayAfterSplit[indexArrayYear[i]]);
                      } // end of if
                    }// end of for loop

                }
                // csvDataContinentWise[continentName]
                //  console.log(continentObj);

                }//end of else

                lineCount = lineCount + 1;
                // console.log(csvDataObject);
            }).on('close', function(){
                console.log("Done reading file");
                console.log(csvDataObject);
                console.log(csvDataObjectAfrican);
                console.log(csvDataContinentWise);

                // now convert these files to json data and save them to files
                // JSON.stringify(j);
                var fs = require('fs');
                fs.writeFile("csvData-1.json", JSON.stringify(csvDataObject), function(err) {
                    if(err) {
                        return console.log(err);
                    }
                    console.log("The file csvData-1.json was saved!");
                });
                fs.writeFile("csvDataAfrican-2.json", JSON.stringify(csvDataObjectAfrican), function(err) {
                    if(err) {
                        return console.log(err);
                    }
                    console.log("The file  csvDataAfrican-2.json was saved!");
                });
                fs.writeFile("csvDataContinent-3.json", JSON.stringify(csvDataContinentWise), function(err) {
                    if(err) {
                        return console.log(err);
                    }
                    console.log("The file csvDataContinent-3.json was saved!");
                });

            });
            // function to check if obj exists in array
            function include(arr,obj) {
                return (arr.indexOf(obj) != -1);
            }


            // fuction to map a given country to a continent
            function getContinent(country,lookupArray){
                var len = lookupArray.length;
                for (var i = 1; i < len; i = i + 1){
                    var splitVals = lookupArray[i].split(",");
                    if ( splitVals[0] == country ){ //means we have got the continent for the country
                        return splitVals[1];
                    }
                }
            }
        });


    });//end of african country lookup

}()
); // end of root function
