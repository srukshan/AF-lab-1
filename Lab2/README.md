# Application Framwork Lab 2

1. Understand the ‘this’ keyword in JavaScript.
* Declare a variable named vehicleName in the window object (var) and assign value ‘Toyota’ to it. This a global variable declaration.
*   Declare a function named printVehicleNameOuter to print out the vehicle name. (Use this.vehicleName, since the variable you declared in the above step is a global variable
assigned to window object. In global scope this points to window object. In the browser scope global object is window object and all the global variable and function declarations are assigned to window object).
    * Test this by printing this and window object to console. And verify that they both prints window object.
    * Check the vehicleName and the printVehicleNameOuter you declared are in the printed window object.
* Call the function printVehicleNameOuter and verify it is printing ‘Toyota’.
* Declare an object named Vehicle (using object literal notation ‘{}’) which have a variable
called vehicleName and assigned the value ‘Nissan’ to it. Declare a function named
printVehicleNameInner and assign printVehicleNameOuter to it.
* Execute the printVehicleNameInner function and see the results

2. Use curly brackets to create JSON like JavaScript object and add properties and functions to the object.

3. Understand the ‘this’ keyword in JavaScript.
* Declare a global variable named vehicleName in the window objec
* Declare a method named printVehicleNameto print out the vehicle name
* Declare an object named Vehicle(using object literal notation) which have a variable called vehicleNameand declare a function named getVehicleNameand assign it with theprintVehicleName
* Execute the printVehicleName function and the getVehicleName functions to see the results
* Correct the getVehicleName to print out the global variable vehicleNameusing the this keyword

4. Create a separate function using JavaScript closurewhich accepts the tax percentage and returns a function which accepts the amount and returns the amount after adding tax percentage. Try adding tax percentage to ‘this’object and check if it works.

5. Write a function to call GitHub API (https://api.github.com/users) and get users and return the users to the caller.