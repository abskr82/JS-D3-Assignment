// defining a function
function addTwoNums(param1,param2) {
    return param1 + param2;

}

// function call
var result = addTwoNums(2,4);
alert(result);

// Anonymous function
// also we can assign functions to a variable, functions in java scripts are variables
var addFunction = function(param1,param2) {
    return param1 + param2;
}

alert(addFunction(3,5));

// passing functions as function parameter

function doSomthing(param1, param2){
    return param1 * param2;
}

var someNewFunction = function(param1, param2, fn){
    var addOutput = param1 + param2;
    return fn(addOutput, param2);
}

var newVal = someNewFunction(2, 4, doSomthing);

alert(newVal);


// also we can write above function call as
var newVal1 = someNewFunction(2, 4, function(param1, param2){
    return param1 * param2;
});

alert(newVal1);
