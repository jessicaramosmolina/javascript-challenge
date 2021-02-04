// from data.js
var tableData = data;

// YOUR CODE HERE!
// check table in console
// console.log(data);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Getting a reference to the input element on the page with 
// the id property set to 'datetime'
var inputElement = d3.select("#datetime");

// Creating a function to show the table 
function infoTable(tableData2) {
    tableData2.map(data => {

        // Make new row
        var row = tbody.append("tr");
    
        // Append each row with data
        row.append("td").text(data.datetime);
        row.append("td").text(data.city);
        row.append("td").text(data.state);
        row.append("td").text(data.country);
        row.append("td").text(data.shape);
        row.append("td").text(data.durationMinutes);
        row.append("td").text(data.comments);
    });
};

// Displaying the table
infoTable(tableData);

// Create event handlers
var button = d3.select("#filter-btn");
var form = d3.select("#form");

form.on("submit", handleClick);
button.on("click", handleClick);

function handleClick() {
    // console.log("A button was clicked!");

    // Prevent the page from refreshing
    //d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
   
    var filteredData = tableData.filter(data => data.datetime === inputValue);
  
    console.log(filteredData);
    tbody.text("");
    infoTable(filteredData);

};
button.on("click", handleClick);