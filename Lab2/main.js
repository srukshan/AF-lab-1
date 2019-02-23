// @ts-check

// -- 1 --

console.log("Question 1");
console.log("");

var vehicleName = 'Toyota';

function printVehicleNameOuter(){
    console.log(this.vehicleName)
}

console.log(this);

printVehicleNameOuter();

var vehicle = {
    vehicleName: 'Nissan',
    printVehicleNameInner: function(){
        return function(){
            console.log(this.vehicleName)
        }
    }
};

var excute = vehicle.printVehicleNameInner();
excute();

var excute2 = excute.bind(vehicle);
excute2();

excute.call(vehicle);

// -- 2 --

console.log("");
console.log("");
console.log("Question 2");
console.log("");

function taxCalculator(tax) {
    var taxPercentage = tax;
    return function (amount) {
        return amount * tax / 100
    }
}

var calculator = taxCalculator(10);
console.log(calculator(90));

// -- 3 --

console.log("");
console.log("");
console.log("Question 3");
console.log("");

function fetchUsers(){
    return fetch("https://api.github.com/users").then(function(res){
        return res.json()
    })
}

fetchUsers().then(function (json) {
    console.log(json)
});

// -- 4 --

console.log("");
console.log("");
console.log("Question 4");
console.log("");

function Vehicle(type) {
    Vehicle.VehicleCount++;
    this.type = type;
}

Vehicle.prototype.print = function () {
    console.log("Vehicle is driving");
};

Vehicle.VehicleCount = 0;

vehicle = new Vehicle('Toyota');

vehicle.print();
console.log(Vehicle.VehicleCount);