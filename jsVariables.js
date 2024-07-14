// use the 'var' or 'let' keyword to delcare a variable

var firstName = "Jimmy";
let number = 10;

console.log("Here are some variables: ")

// use backticks (`) to display the output of variables
console.log(`firstName = ${firstName}`)
console.log(`number = ${number}`)

// declare a few more varialbles
let age = 34;
let hourlyWage = 11.99;

// use the variables as a part of calculations
let dailyWage = hourlyWage * 8;
let weeklyWage = dailyWage * 5;

// update the value of the firstName variable
firstName = "Bri";

// output the values of the variables
console.log(`Did you know that ${firstName} is ${age} years old and makes $${weeklyWage} per week?`);

// make constants using the 'const' keyword
const pi = 3.14159265358979;

console.log(`The value of pi is approximately ${pi}, and always will be!`);

// JavaScript Objects work a lot like Python dictionaries
let homer = {
    name: "Homer Jay Simpson",
    age: 39
};
  
let marge = {
    name: "Marjorie Jacqueline Simpson",
    age: 34
};
  
let bart = {
    name: "Bartholomew JoJo Simpson",
    age: 10
};
  
let lisa = {
    name: "Lisa Marie Simpson",
    age: 10
};
  
let maggie = {
    name: "Margaret Simpson",
    age: 1
};

// display the info for one of the JSONs (JS objects)
console.log(homer);

// Array in JS are VERY SIMILAR TO python lists
let myArray = [] // makes an empty array

// use the .push() method to add info to the arrays
myArray.push('Alpha');
myArray.push('Beta');
myArray.push('Gamma');
myArray.push('Delta');
myArray.push('Epsilon');

// display the entire array
console.log(myArray);

// use a number index to access an item from the array
console.log(myArray[2])

// use slicing to display select index (similar to the range() command in python)
console.log(myArray.slice(1, 3)); // prints 'Beta' then 'Gamma'

// make an array from the Simpsons JS Objects
var simpsons = [homer, marge, bart, lisa, maggie];

// display the array of JS Objects
console.log(simpsons);

// JSONs are collections of Key/Value pairs
let charlotte = {
    name: "Charlotte",
    state: "North Carolina",
    nickname: "Queen City"
};

// display the city's name
console.log(charlotte["name"]);

// display the state using . syntax
console.log(charlotte.state); // same as charlotte["state"]

// add a property
charlotte.population = 897700; // makes a key value pair named 'population'

console.log(charlotte);