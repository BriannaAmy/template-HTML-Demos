let names = []
let greekNames = []
let romanNames = []
let greekSearchResults = []
let romanSearchResults = []

// confirm data has been loaded
console.log(searchResults);

// loop that will populate the arrays
for (let i = 0; i < searchResults.length; i++)
{
    // grab each json of data
    let row = searchResults[i]; 

    // use the row and extract the key-value pairs to populate the arrays
    // us the push() function to add to each array
    names.push(row.pair);
    greekNames.push(row.greekName);
    romanNames.push(row.romanName);
    greekSearchResults.push(row.greekSearchResults);
    romanSearchResults.push(row.romanSearchResults);
}

// trace for the Greek search results
let greekTrace = {
    x: names,
    y: greekSearchResults,
    text: greekNames,
    name: "Greek Results",
    type: "bar"
}

// trace for the Roman search results
let romanTrace = {
    x: names,
    y: romanSearchResults,
    text: romanNames,
    name: "Roman Results",
    type: "bar"
}

// data array
let data2 = [greekTrace, romanTrace]

// Apply a title to the layout
let layout = {
    title: "Greek vs Roman Gods Search Results",
    barmode: "group",
    // Include margins in the layout so the x-tick labels display correctly
    margin: {
      l: 50,
      r: 50,
      b: 200,
      t: 50,
      pad: 4
    }
};

// call on Plotly to plot this visualization
Plotly.newPlot("plot2", data2, layout)