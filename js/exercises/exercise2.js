var Vehicle = Backbone.Model.extend({

	default: {
		registrationNumber: "XXX-XXX", 
		color: "beige"
	}

	urlRoot: "/api/vehicle",

	start: function(){
		console.log("Vehicle started");
	}
});

var Vehicles = Backbone.Collection.extend({
	model: Vehicle,

	url:"api/vehicles"
});

var vehicles = new Vehicles([
	new Vehicle( {registrationNumber = "XLI887", color = "Blue"}),
	new Vehicle( {registrationNumber = "ZNP123", color = "Blue"}),
	new Vehicle( {registrationNumber = "XUV456", color = "Grey"})
	]);

var blueCars = vehicles.where({ color: "Blue"});
var specificRegistration = vehicles.where({ registrationNumber: "XLI887"});

console.log("blue cars:", blueCars);
console.log("Registration #:", specificRegistration);


console.log("to JSON:", vehicles.toJSON());

vehicles.each(function(vehicle){
	console.log(vehicle);
});
