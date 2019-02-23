// @ts-check


// 2
function runner(object){
    object.fun(object.msg)
}

var obj = {
    "msg" : "hello world",
    "fun" : (msg) => {
        console.log(msg)
    }
}
runner(obj)

// 3
var vehicleName = "car"

function printVehicleName(){
    console.log(this.vehicleName)
}

var Vehicle = {
    vehicleName : "van",
    getVehicleName : printVehicleName
}

Vehicle.getVehicleName()
printVehicleName()


//4

function calc(tax){

    function taxAmount(amount){
        return amount + tax;
    }
    return taxAmount;
}

var am = calc(10);

console.log(am(5));

//5

function githubAPI(callback){
    $.getJSON("https://api.github.com/users", callback);
}

function userEx(data){
    data.forEach(element => {
        if(element.id == 1){
            console.log(element.url)
        }
    });
}

githubAPI(userEx);
