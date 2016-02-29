// var fs = require('fs'),
// csvDataContinent-3
// Read the file and send to the callback
// fs.readFile('data_folder/csvDataContinent-3.json', handleFile);
var fs = require('fs');
var obj;
arr = [];
fs.readFile('data_folder/csvData-1.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  var arr =[];
  Object.keys(obj).forEach(function(key) {
      console.log(key + " -->" + obj[key]);
      Object.keys(obj[key]).forEach(function(k){
          console.log(k + " -->" + obj[key][k]);
          var arrTemp = [];
          Object.keys(obj[key][k]).forEach(function(k1){
              console.log(k1 + " -->" + obj[key][k][k1]);
              arrTemp.push(
                  {'x' : k1, 'y' : obj[key][k][k1] }
              );
          });
          arr.push(arrTemp);
      });
    //   arr.push (
    //       {'x' : key, 'y' : obj[key]}
    //   )
    console.log(arr.length);
    for (var i = 0; i < arr.length; i = i +1){
        console.log(i+1);
        //stringify
        var file_postfix = i+1;
        fs.writeFile("csvData"+ file_postfix +".json", JSON.stringify(arr[i]), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file  csvData"+ file_postfix +".json was saved!");
        });

    }
  });
  // console.log(JSON.stringify(arr));
  // fs.writeFile("csvData3.json", JSON.stringify(arr), function(err) {
  //     if(err) {
  //         return console.log(err);
  //     }
  //     console.log("The file  csvDataAfrican-2.json was saved!");
  // });
});
