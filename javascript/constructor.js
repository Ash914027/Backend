
//object constructor
function person(name,age,city){
    this.name=name;
    this.age=age;
    this.city=city;
}
let p1=new person("john",30,"new york");
let p2=new person("smith",25,"london");
console.log(p1.name);
console.log(p2.name);

adding element to end  using push
let colors=["red","green","blue"];
colors.push("orange");
console.log(colors);
//append in last using  push

colors.unshift("yellow");
console.log(colors);
//to remove the last element
let removedlast=colors.pop();
console.log(colors);

//to remove the first element
let removedfirst=colors.shift();
console.log(colors);

//finding  index of element
console.log(colors.indexOf("green"));
//iterating  using for loop
for(let i=0;i<colors.length;i++){
    console.log(colors[i]);
}
//slicing an array
let newcolors=colors.slice(1,3);
console.log(newcolors);
//splice
colors.splice(1,0,"purple");
console.log(colors);
concat
let colors1=["red","green","blue"];
let colors2=["orange","pink","black"];
let colors3=colors1.concat(colors2);
console.log(colors3);
const multiply= function(a,b) 
{
    return a*b;
};
const product=multiply(5,6);
console.log('Using  Function:',product);
arrow function
const multiply1=(a,b)=> a*b;
const product1=multiply1(5,6);
console.log('Arrow Function:',product1);
 error handling
try {
    throw new Error('Something bad happened!');

}
catch (error)
{
    console.error(error.message);
}
finally 
{
    console.log('cleanup code');
}

callback
callback are functions that are passed as arguments to other function
synchronous vs Asynchronous
synchronous-executly instanly aysynchronous-
synchronous
function parentFunction(name,callback)
{
    callback();
    console.log("hey"+name);
}
function randomFunction(){
    console.log("hey I am callbackfunction");
}
parentFunction("random string",randomFunction);
Asynchronous function
function parentFunction(name,callback)
{
    setTimeout(callback,2000);
    console.log("hey"+name);
}
function randomFunction(){
    console.log("hey I am callbackfunction");
}
parentFunction("random string",randomFunction);
//with anonnymous function
function parentFunction(name,callback)
{
    setTimeout(callback,2000);
    console.log("hey"+name);
}
parentFunction('random string',function()
{    console.log("hey I am callbackfunction");
});




