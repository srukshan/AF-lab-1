// @ts-check

// -- 1 --

console.log("Question 1")
console.log("")

var vehicleName = 'Toyota'

function printVehicleNameOuter(){
    console.log(this.vehicleName)
}

console.log(this)

printVehicleNameOuter()

var vehicle = {
    vehicleName: 'Nissan',
    printVehicleNameInner: function(){
        return function(){
            console.log(this.vehicleName)
        }
    }
};

var excute = vehicle.printVehicleNameInner()
excute()

var excute2 = excute.bind(vehicle)
excute2()

excute.call(vehicle)

// -- 2 --

console.log("")
console.log("")
console.log("Question 2")
console.log("")

function taxCalculator(tax) {
    var taxPercentage = tax
    return function (amount) {
        return amount * tax / 100
    }
}

var calculator = taxCalculator(10)
console.log(calculator(90))

// -- 2 --

console.log("")
console.log("")
console.log("Question 3")
console.log("")

function fetchUsers(){
    fetch("https://api.github.com/users").then(function(res){
        return res.json()
    }).then(function(json){
        console.log(json)
    })
}

fetchUsers();