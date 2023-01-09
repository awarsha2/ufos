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
}
