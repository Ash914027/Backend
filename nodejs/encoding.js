//encoding data to json format
const dataobject={
    name:'John',
    age:30,
    city:'New York'
};
const jsonData=JSON.stringify(dataobject);
console.log(jsonData);