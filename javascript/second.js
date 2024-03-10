// let num = 10;
// num += 5;
// console.log(`The value of num is: ${num}`);
// num -= 5;
// console.log(`The value of num is: ${num}`);
// num *= 5;
// console.log(`The value of num is: ${num}`);
// num /= 5;
// console.log(`The value of num is: ${num}`);
// num %= 5;
// console.log(`The value of num is: ${num}`);


///////////////////////////////////////////////////////////

// loops

// for(let i = 0; i<5 ; i++)
// {
//     console.log(i);
// }


// let count = 0;
// while(count < 5)
// {
//     console.log(count);
//     count++;
// }


// let count = 0;
// do{
//     console.log(count+1);
//     count++;
// }while(count < 5);

///////////////////////////////////////////////////////////


// let person = {name:"john", age:30, occupation:"Developer"};

// for(let key in person){
//     console.log(key + ": " + person[key]);
// }

///////////////////////////////////////////////////////////


// Anonymous functions

// let car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2022,
//     isElectric: false,
//     start : function()  // defining a function without a name with just the key word function (thats why it is called anonymous function).
//     {
//         console.log("Engine started!");
//     }
// };


// console.log(car.make);
// console.log(car.year);

// // to call the function defined inside the object we have to call it like a function
// car.start();


///////////////////////////////////////////////////////////


// Object constructor function

// function Book(title, author, year)
// {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

// let book1 = new Book("The Catcher in the Rye" , "J.D. Salinger", 1951);
// let book2 = new Book("To kill a Mockingbird" , "Harper Lee", 1960);

// console.log(book1);
// console.log("\n");
// console.log(book2);

///////////////////////////////////////////////////////////


let fruits = ["apple" , "banana" , "orange" ,"grapes"];
console.log("Original Array: ",fruits);

// console.log(fruits[0]);
// console.log(fruits[1]);

// // to append in the last
// fruits.push("kiwi");
// console.log(fruits);

// // to append in the front
// fruits.unshift("mango");
// console.log(fruits);

// // to remove the last element
// let removedLast = fruits.pop();
// console.log(removedLast);

// // to remove the first element
// let removedFirst = fruits.shift();
// console.log(removedFirst);


// // to find the index of the element
// let IndexofOrange = fruits.indexOf("orange");
// console.log(IndexofOrange);

// // Iterating using a for loop
// for(let i = 0; i<fruits.length ;i++)
// {
//     console.log(fruits[i]);
// }

// Slicing an array
let citrus = fruits.slice(1,3);
console.log("Sliced array is: ",citrus);


// Splice method :-

//to replace
fruits.splice(1,1,"bungi jumping");
console.log("Replacing banana with bungi jumping: ",fruits);

// to delete
fruits.splice(1,1);
console.log("Deleting index 1 value: ",fruits);

// to add
fruits.splice(1,0,"bungi jumping");
console.log("Adding element at index 1: ",fruits);

// Concatenating arrays
let moreFruits = ["Grapefruit", "pineapple"];
let allfruits = fruits.concat(moreFruits);
console.log(allfruits);