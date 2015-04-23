var Vehicle = Backbone.Model.extend({

	default: {
		registrationNumber: "new plate", 
		color: "beige"
	}

	urlRoot: "/api/vehicle",

	start: function(){
		console.log("Vehicle started");
	}
});

var Car = Vehicle.extend(){

	start: function(){
		console.log("Car with registration number " + {this.get("registrationNumber")} + "started.");
	}
};

var car = new Car({
	registrationNumber: "XLI887",
	color: "Blue"
});


car.unset("registrationNumber");

var isValid = car.isValid();

var lastError = song.validationError;

car.set("registrationNumber","XLI887");

console.log(car.isValid());




