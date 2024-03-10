// Funtion in JS
const multiply = function(a,b)
{
    return a*b;
}
let ans = multiply(4,5);
console.log(ans);



// Arrow functions (Modern JS 😉)
/*
let mul = (a,b) =>
{
    return a*b;     // for multiple line
}
*/

let mul = (a,b) => a * b;  // for single line (Mentos jindagi)
let ans2 = mul(7,9);
console.log(ans2);