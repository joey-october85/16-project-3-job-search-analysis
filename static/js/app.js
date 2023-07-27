/** define buttons and event listeners**/
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("nav-toggle");
});

/*charts*/
const config = { responsive: true};

// use d3 to call api, itterate through the data, select specific element(s) in our HTML and append data
d3.json("http://127.0.0.1:5000/api/title_count", function(data) {
    console.log(data);
    console.log( data['count'].length)
    
    for(x in data['count']){
        var _li = d3.select('#dash_id').append('li');
        _li.append('h4').text(data['title'][x]);
        _li.append('span').text(data['count'][x]);
    }
// define chart layout
    const pieChartLayout = {
        paper_bgcolor: "#172042",
        plot_bgcolor: "#172042",
        piecolorway: ["#ea335d", "#03dcee", "#178add"],
        showlegend: false,
        margin: {
            l: 10,
            r: 10,
            b: 10,
            t: 30,
            pad: 1,
        },
        title: {
            text: 'Top Search Results Percentage'
    
        },
        font: {
            color: "#6b6f8a"
        },
        height: 500,
        wiedth: 500,
    };
    
    
  // use API data to populate values and labels  
    const donutChartData = [
        {
            values: data['count'],
            labels: data['title'],
            hole: 0.4,
            type: "pie",
        },
    ];
// plot the chart
    Plotly.newPlot("donutChart", donutChartData, pieChartLayout);
    

    
  });
// use d3 to call api, 
  d3.json("http://127.0.0.1:5000/api/min_max", function(data) {
    console.log(data);
    
    // populate x and y values with data from the api and define other parameters
    const barChartTrace1 = {
        x: data['title'],
        y: data['max_salary'],
        name: "Salary Max",
        type: "bar",
        marker: {
            color: "#ea335d",
        },
    
    };
    
    //populate x and y values with data from the api and define other parameters
    const barChartTrace2 = {
        x: data['title'],
        y: data['min_salary'],
        name: "Salary Min",
        type: "bar",
        marker: {
            color: "#ea335d",
            opacity: 0.6,
        },
    };
    
    const barChartData = [barChartTrace1, barChartTrace2];
    
    // define layout properties
    const layout = {
        barmode: "grouped",
        paper_bgcolor: "#172042",
        plot_bgcolor: "#172042",
        showlegend: false,
        margin: {
            l: 30,
            r: 30,
            b: 30,
            t: 30,
            pad: 1,
        },
        title: {
            text: 'Maximum/Minimum Salary per Position'

        },
        
        font: {
            color: "#6b6f8a"
        },
    };
    
    // plot bar chart
    Plotly.newPlot("barChart", barChartData, layout, config);

  });
  
  
  /* variable will format double precision value from query into USD Currency format*/
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })


  d3.json("http://127.0.0.1:5000/api/mid_values", function(data) {
    console.log(data);
    console.log( data['title'].length)
    
    for(x in data['title']){
        var _mr = d3.select('#mid_values').append('div');
        _mr.append('h4').text(data['title'][x]);
        _mr.append('h1').text(formatter.format(data['mid_range'][x]));
        _mr.append('small').text('mid-range salary');
    
    }

      });

