// defining function with callback
function getAfricanCountryArray(callback){
    var lineReader = require('readline').createInterface({
      input: require('fs').createReadStream("africanCountry.txt")
    });
    arr1 = [];
    lineReader.on('line', function (line) {
        arr1.push(line);
        // console.log(line);
    }).on('close',function(){
        // console.log(arr1);
        return callback(arr1);
    });
}

var dataArray = [];

getAfricanCountryArray(function (res) {
    console.log(res);
    dataArray = res;
})
