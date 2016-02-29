// var fs = require('fs'),
// csvDataContinent-3
// Read the file and send to the callback
// fs.readFile('data_folder/csvDataContinent-3.json', handleFile);
var fs = require('fs');
var obj;
arr = [];
fs.readFile('data_folder/csvDataContinent-3.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  Object.keys(obj).forEach(function(key) {
    //   console.log(key + " -->" + obj[key]);
      arr.push (
          {'x' : key, 'y' : obj[key]}
      )
  });
  // console.log(JSON.stringify(arr));
  fs.writeFile("csvData3.json", JSON.stringify(arr), function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The file  csvDataAfrican-2.json was saved!");
  });
});
