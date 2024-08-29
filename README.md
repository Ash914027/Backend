
<img title="Javascript" alt="Alt text"  align="right" src="https://github.com/Ash914027/Javascript/assets/119170180/98ad18c0-4dcd-4f2c-934e-c530aa51af07">

# 🔢Basic and advanced javascript

# variable in javascript
Variables are containers for storing data values in a program.
They provide named references to memory locations, allowing you to manipulate data.
In JavaScript, variables are declared using the keywords var, let, or const.

var a = "I am global";

let b = "I am global";


# 🍏Objects in javascript

// Object literal notation

let car = {

    make: "Toyota",

    model: "Camry",

    year: 2022,
    isElectric: false,

    start: function() {

      console.log("Engine started!");
    }
  };

## 🔄loops
1. for Loop:

Executes a block of code a specified number of times.

for (let i = 0; i < 5; i++) {
  
    console.log(i);
  }

## 🍏Arrays in javascript
// Creating an array

let fruits = ["apple", "banana", "orange", "grape"];

// Accessing elements

console.log(fruits[0]); // Outputs: apple
console.log(fruits[2]); // Outputs: orange

## Hoisting with 'var'
console.log(x); // undefined
var x = 5;
console.log(x); // 5

The first console.log(x) outputs undefined because the declaration is hoisted, but the assignment (x = 5) happens later in the code.

## function in javascript
const multiply = function(a, b) {
  return a * b;
};

// Invocation
const product = multiply(4, 6);
console.log('Function Expression - Product:', product);

## setTimeout function
Executes a function or a piece of code once after a specified delay.

const delayedFunction = () => {

  console.log('Delayed function executed!');
};

setTimeout(delayedFunction,2000); // Executes after 2 seconds

## Arrow function
const subtract = (a, b) => a - b;
/ Invocation

const difference = subtract(8, 3);

console.log('Arrow Function - Difference:', difference);

## Callback function: Asynchornous
function parentFunction(name, callback){

    setTimeout(callback,1000);

    console.log("Hey "+name);
}
function randomFunction(){
    console.log("Hey I am callbackfunction");
}
parentFunction("Random String",randomFunction);

##Synchronous Callback Function Example![image](https://github.com/Ash914027/Backend/assets/119170180/b2c6629e-0747-4462-b7fb-38575eaf1a37)

function parentFunction(name, callback){
    callback();
    console.log("Hey "+name);
}
function randomFunction(){
    console.log("Hey I am callbackfunction");
}
parentFunction("Random String",randomFunction);



