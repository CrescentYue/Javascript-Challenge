// Level 1: Automatic Table and Date Search
// from data.js
var tableData = data;

//Get a reference totable body
var tbody =d3.select('tbody');

//create append data function using Arrow functions

function tableDisplay(data){
    data.forEach((UFOrecord)=> {
        var row= tbody.append('tr');
    
        Object.entries(UFOrecord).forEach(([key,value])=> {
            var cell =row.append('td').text(value);
        });
    })
};

// append tabledata from data.js
tableDisplay(tableData);
// create function of clearing table for new data

function clearAll() {
    d3.select("tbody")
      .selectAll("tr").remove()
  };

//filter data by inputfield and display table accordingly

function filterData(){

    var inputField= d3.select('#datetime').property('value')

    if (inputField === ""){
        var filtered= tableData;
        tableDisplay(filtered);
    }else{
        var filtered=tableData.filter(a=> a.datetime === inputField);
        tableDisplay(filtered);
    };

    if (filtered.length == 0){
        d3.select("tbody")
        .append("tr")
        .append("td")
        .attr("colspan", 7)
        .html("<h4>No Records Found</h4>");
    };
};

//create button function
var button=d3.select('#filter-btn');

function handleClick(){
    clearAll();
    filterData();
}
button.on('click', handleClick);


