var fs = require ('fs');


fs.readFile('text.txt', function(err, data) {
    if(err){
        console.log("unknown error");
        return;
    }
    console.log(data);
});
