// objects
var car = new Object();
car.name = "Baleno";
car.color = "Blue";
car.getColor = function(){
    return car.color;
    // return this.color;
};

// alert (car.getColor());

// Otr same thing can be written as

car = {
    name : "Baleno",
    color : "Blue",
    getColor : function() {
            return this.color;
    }
};

//
alert(car.getColor());
