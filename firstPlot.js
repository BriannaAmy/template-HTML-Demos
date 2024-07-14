// display your name
let myName = "Bri";

// an array of your three favorite books
let books = ["Jane Eyre", "Eragon", "The Magician's Nephew"];

// an array of the number of times those books were read
let timesRead = [5, 15, 2];

// display data in console
console.log(`myName = ${myName}`);
console.log(books);
console.log(timesRead);

// generate our first plot

// generate a trace - type of viz, along with x and y data stored in a JSON
let trace = {
    x: books, // assigns the book names from the array as x-axis labels
    y: timesRead, // assigns the number of times each book was read as y-values
    type: 'bar' // specifies that this will be a bar chart
};

//put the trace into a list / array
let data = [trace]

// specify layout properties using a JSON
let layout = {
    title: `${myName}'s First Plotly Chart`
};

// call Plotly.newPlot and point the viz to the id in the HTML page
Plotly.newPlot("plot", data, layout);