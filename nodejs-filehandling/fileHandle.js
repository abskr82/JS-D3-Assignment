var fs = require("fs");

console.log("Going to do file operation");

fs.readFile("input.txt", function (err, data) {
    if (err){
        return console.error(err);
    }
    console.log("Async read :" + data.toString());
});
