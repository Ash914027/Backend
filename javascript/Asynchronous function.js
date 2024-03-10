// Asynchronous func --> function which are not executed in the order defined in the code

function parentFunction(name, callback)
{
    setTimeout(callback,1000);
    console.log("hey "+name);
}

function randomFunction()
{
    console.log("Hey I an callback Function");
}

parentFunction("Random String",randomFunction);


/*-----------------------------------------------*/


// Anonymous function  -> function defined without names
function parentFunction(name, callback)
{
    setTimeout(callback,1000);
    console.log("hey "+name);
}

parentFunction("Random String",function(){
    console.log("hey i am a call back function");
});


/*-----------------------------------------------*/


// Making the same function shorter using arrow func
function parentFunction(name, callback)
{
    setTimeout(callback,1000);
    console.log("hey "+name);
}

parentFunction("Random String",() => console.log("hey i am a call back function"));
