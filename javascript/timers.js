// Timers in JS 

// setTimeout function
const delayedFunction = () =>
{
    console.log(`Delayed function executed!`);
}
setTimeout(delayedFunction,2000);  // Executes after 2 Seconds


// setInterval function
const repeatedFunction = () =>
{
    console.log(`Repeated Function executed!`);
}
const intervalId = setInterval(repeatedFunction,1000); // Executes every 1 second
// After some time e.g., 5000ms stop the interval
setTimeout( () =>
{
    clearInterval(intervalId);      // stop  the interval
    console.log("Interval stopped");
},5000);
