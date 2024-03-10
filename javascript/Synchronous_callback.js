// Synchronous func in JS   -->     
// They are the funciton defined in the js which are executed in fixed order at the time of execution as they were defined in the code and not in any random order.

function parentFunction(name, callback)
{
    callback();
    console.log("hey " + name);
}

function randomFunction(){          // callback func or Higher order func which are passed to parent func.
    console.log("hey I am callback funtion");
}

parentFunction("Random String",randomFunction);