
function getAfricanCountryArray(){
    var lineReader = require('readline').createInterface({
      input: require('fs').createReadStream("africanCountry.txt")
    });
    africanCountryList = [];
    lineReader.on('line', function (line) {
        africanCountryList.push(line);
        // console.log(line);
    }).on('close',function(){
         console.log(africanCountryList);
        //  done with collecting african country list
    });
}

// // function to check whether a value exists in an array
// function include(arr,obj) {
//     return (arr.indexOf(obj) != -1);
// }
//
// var dataArray = [];
//
// getAfricanCountryArray(function (res) {
//     console.log(res);
//     dataArray = res;
// })
