// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    //clear data
    tbody.html("");

    //loop through new data, append new rows and cells
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        //loop through data entry to add cells
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
};

function handleClick() {
    //get datetime from filter
    let data = d3.select("#datetime").property("value");
    let filteredData = tableData;
    //check for date and filter data from that date
    if (date) {
        //filter table data for only rows where datetime value matches filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    //rebuild table with filtered data
    //if not date is entered, filtered data will just be original/unfiltered tableData
    buildTable(filteredData);
};

//listen event
d3.selectAll("#filter-btn").on("click", handleClick);

//build table when page loads
buildTable(tableData);