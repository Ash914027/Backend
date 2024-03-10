// function exampleFunction() {
//     if(true)
//     {
//         var functionScopedVar = "I am Function Scoped";  // we cannot use let here as let will make the variable block level and we cannot access it outside the block.

//         let blockScopedLet = "I am block Scoped";

//         const blockScopedConst = " I am constant and block Scoped";
//     }
//     console.log(functionScopedVar); // I am function scoped
//     console.log(blockScopedLet);  // error 
//     console.log(blockScopedConst); // error
// }

// exampleFunction();


////////////////////////////////////////////////////


// var shadowedVar = "I am global";

// function exampleFunction1() {
//     var shadowedVar = "I am local";
//     console.log(shadowedVar);
// }
// console.log(shadowedVar);


////////////////////////////////////////////////////


// hoisting in JS

console.log(x);
var x = 5;
console.log(x);


////////////////////////////////////////////////////


// let person ={
//     name : "Aarush",
//     age: 20,
//     isStudent: true
// };

// console.log(person.name);  // object.key
// console.log(person["name"]); // object["Key"]  both ways are correct.
// console.log(person); // to print the whole object.


////////////////////////////////////////////////////


// Arrays

// let fruits = [1, " banana", "Apple"];
// console.log(fruits[0]);


////////////////////////////////////////////////////


// typeof

// let exampleVar = "Hello";
// console.log(typeof(exampleVar));
// console.log(typeof exampleVar); // both ways are correct.


////////////////////////////////////////////////////


// Type coercion

// let result = 5 + "5";   // 55 - string
// console.log(result);

// result = 5 - "2";      // 3 - number
// console.log(result);

// let check = "5" * "2";  // 10 - number
// console.log(check);
// console.log(typeof check); 


////////////////////////////////////////////////////


// comparision operator
// let a = 10;
// let b = 9;

// console.log(a>b);
// console.log(a>=b);
// console.log(a<b);
// console.log(a<=b);
// console.log(a===b);
// console.log(a!==b);


//////////////////////////////////////////////////////


// logical operators

// let p = true;
// let q = false;

// console.log(p && q);
// console.log(p || q);
// console.log(!p);


//////////////////////////////////////////////////////