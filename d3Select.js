// Select the text of an HTML element
let text1 = d3.select(".text1").text(); // references content with class="text1" in the html
console.log("text1 says: ", text1);

let text2 = d3.select("#text2").text(); // references content with id="text2" in the html
console.log("text3 says: ", text2);

// Modify the text of an HTML element
d3.select(".text1").text("Hey, I changed this!");

text1 = d3.select(".text1").text(); // references content with class="text1" in the html
console.log("text1 now says: ", text1);

// Capture the HTML of a selection
let myLink = d3.select(".myLink").html();
console.log("myLink: ", myLink);

// Select an element's child element
// An object is returned
let myLinkAnchor = d3.select(".myLink>a");
console.log(myLinkAnchor);

// Capture the child element's href attribute
let myLinkAnchorAttribute = myLinkAnchor.attr("href");
console.log("myLinkAnchorAttribute: " + myLinkAnchorAttribute);

// Use chaining to join methods
d3.select(".myLink>a").attr("href", "https://nytimes.com").text("Now this is a link to the NYT!!");

// populate the bootstrap table
// use d3 to select the table
let table = d3.select("table");

// Use D3 to create a bootstrap striped table
// https://getbootstrap.com/docs/5.3/content/tables/#striped-rows
table.classed("table-striped", true);

let tbody = d3.select("tbody");

let grades = [["Malcolm", 80], ["Zoe", 85], ["Kaylee", 99], ["Simon", 99], ["Wash", 79]];

// use a loop to populate the bootstrap table
for (let i = 0; i < grades.length; i++)
    {
        // get current grade
        let grade = grades[i];

        // append on table row `tr` to the table body
        let row = tbody.append("tr");

        // append one cell for the student name
        row.append("td").text(grade[0]);

        // append one cell for the studend grade
        row.append("td").text(grade[1]);
    }