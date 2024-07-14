// SLICING IN JS

// Array of names
let names = ["Jim", "James", "Paul", "Tyrone", "Erykah"];

// use the slice() function to get a subset of names
// to get the first two names:
let firstTwo = names.slice(0, 2);   // starts at index 0 and stops before index 2

console.log(firstTwo);

// use the slice() function to get the last 3 names
let lastThree = names.slice(2, 5);

console.log(lastThree);



// SORTING IN JS

// Array of numbers 
let numbers = [3, 4, 2, 1];

// can use reverse function
console.log(numbers);
console.log(numbers.reverse());

// sorting requires the .sort() function with an internal helper function
// that is used to tell how the values are to be compared
// to sort in descending order
let descOrder = numbers.sort(
    function compare(firstNum, nextNum)
    {
        // function is used to tell how to compare adjacent values
        return nextNum - firstNum;  // not subtracting, but puts the second number before the first
                                    // if the second num is greater than the first
    }
);

console.log(descOrder);

// alternative way of writing the code
let descOrderArrow = numbers.sort((firstNum, nextNum) => nextNum - firstNum);

console.log(descOrderArrow);

// to sort in ascending order
let ascOrder = numbers.sort((firstNum, nextNum) => firstNum - nextNum);

console.log(ascOrder);

// can also use reverse function
console.log(numbers);
console.log(numbers.reverse());



// using greekromandata.js file then put values in desc order based on the greek search results
let sortedByGreek = searchResults.sort((first, next) => next.greekSearchResults - first.greekSearchResults);

// take the top tex greek search results using the slice() function
let greekSliced = sortedByGreek.slice(0, 10);

console.log(greekSliced);

//reverse the data so that we can see the data going from left to right in the plot
greekSliced.reverse();

// set up the trace for the greek data
let trace = {
    x: greekSliced.map(result => result.greekSearchResults),
    y: greekSliced.map(result => result.greekName),
    text: greekSliced.map(result => result.greekName),
    type: "bar",
    orientation: "h"
};

// put trace into a data array
let data = [trace];

// add title and padding to the plot
let layout = {
    title: "Greek Gods Search Results",
    margin: {
        l: 100,
        r: 100,
        t: 100, 
        b: 100
    }
};

// newPlot
Plotly.newPlot("plot", data, layout);