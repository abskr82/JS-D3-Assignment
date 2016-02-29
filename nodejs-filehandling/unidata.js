var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream("uniqArr.js")
});
var africanCountryList = [];
lineReader.on('line', function (line) {
    africanCountryList.push(line); //push data to the array
    // console.log(line);
}).on('close',function(){
    // read continent lookup file
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    var unique = africanCountryList.filter( onlyUnique );
    console.log(unique);
});
