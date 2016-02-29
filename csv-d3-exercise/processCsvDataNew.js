( function processCsvMain(){

    // read african country list from the file
    var lineReader = require('readline').createInterface({
      input: require('fs').createReadStream("africanCountry.txt")
    });
    var africanCountryList = [];
    lineReader.on('line', function (line) {
        africanCountryList.push(line); //push data to the array
        // console.log(line);
    }).on('close',function(){
        // read continent lookup file
        var lineReader = require('readline').createInterface({
          input: require('fs').createReadStream("continentLookup.csv")
        });
        continentLookupArray = [];
        lineReader.on('line', function (line) {
            continentLookupArray.push(line);
        }).on('close', function(){
            // console.log(continentLookupArray);
            // Now read config file for problem configuration
            var config = require("./sampleConfigFile.json");

            var countryName = config['Country Name'];
            var indicatoreArray = config['Indicator Name'];
            var yearStart = config['yearStart'];
            var yearEnd = config['yearEnd'];

            //  filters for problem 2
            var p2Filter = config['p2Filter'];
            var p2FilterYear = config['p2FilterYear'];

            // filter for problem 3
            var p3Filter = config['p3Filter'];

            // now read main csv for data filtering
            var lineReader = require('readline').createInterface({
              input: require('fs').createReadStream("csvDataFile/WDI_Data.csv")
            });


            // function variable to return header and index map object
            // this will read first line of csv and create an object with header
            // and index of that header.
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
            var indexCountryName,indexIndicatorName,indexArrayYear = [];
            var headerIndexMapObject = {};
            var headerLine = [];
            var csvDataObjectAfrican = {};
            var csvDataContinentWise = {};
            lineReader.on('line', function (line) {
              // split text line by line
              var newArrayAfterSplit = line.split(",");

              // check if the line is header line
              if( lineCount == 1){
                // assign values to predefined variables which will get used later
                headerIndexMapObject = headerToIndexMap(line);
                indexCountryName = headerIndexMapObject['Country Name'];
                indexIndicatorName = headerIndexMapObject['Indicator Name'];
                headerLine = newArrayAfterSplit;
                // console.log(indexIndicatorName);
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
                            }
                            // check for empty elements
                              if ( newArrayAfterSplit[indexArrayYear[i]].length !=0 ){
                                //   console.log(newArrayAfterSplit[indexArrayYear[i]]);
                                // if its already defined add on to that else define that
                                  if (csvDataObject[x][y][z] != undefined ){
                                      csvDataObject[x][y][z] = parseFloat(csvDataObject[x][y][z]) + parseFloat(newArrayAfterSplit[indexArrayYear[i]]);
                                  }
                                  else {
                                      csvDataObject[x][y][z] = newArrayAfterSplit[indexArrayYear[i]];
                                    // console.log(csvDataObject);
                                } // end of inner else
                            } // end of main if
                          }// end of for loop
                    }//end of if
                } // end of if countryName
                // check if the variable is a african country
                else if ( include(africanCountryList, x) ) {
                    // yes its an african country
                    // console.log("******************");
                    // Arable land (% of land area) in 2010
                    // now check if this line has "Arable land (% of land area)" indicator

                    if ( y == p2Filter){
                        //yes it has "Arable land (% of land area) indicator"
                        // now get the index for "2010"
                        var indexForYear = headerIndexMapObject[p2FilterYear];
                        // console.log(indexForYear);
                        // console.log(newArrayAfterSplit[indexForYear]);
                        // csvDataObjectAfrican

                        if (csvDataObjectAfrican[x] != undefined ){
                            csvDataObjectAfrican[x] = parseFloat(csvDataObjectAfrican[x]) + parseFloat(newArrayAfterSplit[indexForYear]);
                        }
                        else {
                            csvDataObjectAfrican[x] = newArrayAfterSplit[indexForYear];
                        }
                    }//end of if
                }//end of else if

                // here we will write code for last problem
                //  now find the indicator value for "Arable land (hectares)"

                if ( y == p3Filter){
                    // get continent name
                    var continentName = getContinent(x,continentLookupArray);
                    console.log("Continet name is ",continentName );
                    console.log("Country is ",x);
                    // console.log(continentName);
                    //check if we have got continent value
                    if ( continentName != undefined ){
                        if( continentName in csvDataContinentWise == false ){
                            csvDataContinentWise[continentName] = {};
                        }
                        // iterate through all the year index.
                        for ( var i = 0; i < indexArrayYear.length; i = i + 1){
                            z = headerLine[indexArrayYear[i]]; // get the year
                          // check for empty elements
                            if ( newArrayAfterSplit[indexArrayYear[i]].length !=0 ){
                                if (csvDataContinentWise[continentName][z] != undefined ){
                                    csvDataContinentWise[continentName][z] = parseFloat(csvDataContinentWise[continentName][z]) + parseFloat(newArrayAfterSplit[indexArrayYear[i]]);
                                }
                                else {
                                    csvDataContinentWise[continentName][z] = newArrayAfterSplit[indexArrayYear[i]];
                                    // console.log(newArrayAfterSplit[indexArrayYear[i]]);
                                    // console.log(csvDataContinentWise);
                                  // console.log(csvDataObject);
                                }
                              // console.log(newArrayAfterSplit[indexArrayYear[i]]);
                          } // end of if
                        }// end of for loop
                    }
                }
                }//end of else

                lineCount = lineCount + 1;
                // console.log(csvDataObject);
            }).on('close', function(){
                console.log("Done reading file");
                // console.log(csvDataObject);
                // console.log(csvDataObjectAfrican);
                // console.log(csvDataContinentWise);
                // convert these objects to final array of objects
                // which will get utilized for graph plotting
                Object.keys(csvDataObject).forEach(function(key) {
                    // console.log(key + " -->" + csvDataObject[key]);
                    Object.keys(csvDataObject[key]).forEach(function(k){
                        // console.log(k + " -->" + csvDataObject[key][k]);
                        var arrTemp = [];
                        var file_postfix = k;
                        Object.keys(csvDataObject[key][k]).forEach(function(k1){
                            // console.log(k1 + " -->" + csvDataObject[key][k][k1]);
                            arrTemp.push(
                                {'x' : k1, 'y' : csvDataObject[key][k][k1] }
                            );
                        });
                        // arr.push(arrTemp);
                        // add arrTemp data to file
                        var fs = require('fs');
                        fs.writeFile("jsonOutput/csvData"+ file_postfix +".json", JSON.stringify(arrTemp), function(err) {
                            if(err) {
                                return console.log(err);
                            }
                            console.log("The file csvData"+ file_postfix +".json was saved!");
                            // file_postfix = file_postfix + 1;
                        });

                    });
                });
                //  copnvert african country data to array of objects
                // csvDataObjectAfrican
                var arrVar = [];
                Object.keys(csvDataObjectAfrican).forEach(function(key) {
                    // console.log(key + " -->" + csvDataObjectAfrican[key]);
                         arrVar.push(
                             {'x' : key, 'y' : csvDataObjectAfrican[key]}
                         );
                });
                var fs = require('fs');
                fs.writeFile("jsonOutput/csvDataAfrican.json", JSON.stringify(arrVar), function(err) {
                    if(err) {
                        return console.log(err);
                    }
                    console.log("The file  csvDataAfrican.json was saved!");
                });


                // now convert continent data to desired form
                var arrVarCon =[];
                Object.keys(csvDataContinentWise).forEach(function(key) {
                    // console.log(key + " -->" + csvDataContinentWise[key]);
                    Object.keys(csvDataContinentWise[key]).forEach(function(k1){
                        // console.log(k1 + "-->" + csvDataContinentWise[key][k1])
                        arrVarCon.push(
                            {
                                'continent' : key,
                                'year' : k1,
                                'value' : csvDataContinentWise[key][k1]
                            }
                        );
                    });
                });
                var fs = require('fs');
                fs.writeFile("jsonOutput/csvDataContinent.json", JSON.stringify(arrVarCon), function(err) {
                    if(err) {
                        return console.log(err);
                    }
                    console.log("The file  csvDataContinent.json was saved!");
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
                return undefined;
            } // end of function
        });


    });//end of african country lookup

}()
); // end of root function
