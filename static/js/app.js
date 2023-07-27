const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("nav-toggle");
});

/*charts*/
const config = { responsive: true};

//bar
// const barChartTrace1 = {
//     x: ["Business Analyst", "Remote Data Analyst", "Data Analyst", "Sr Functional Analyst"],
//     y: [125453.18, 70121.7, 106206.86, 98262.3],
//     name: "Salary Max",
//     type: "bar",
//     marker: {
//         color: "#ea335d",
//     },

// };

// const barChartTrace2 = {
//     x: ["Business Analyst", "Remote Data Analyst", "Data Analyst", "Sr Functional Analyst"],
//     y: [53625.96, 58703.31, 45491.63, 93475.94],
//     name: "Salary Min",
//     type: "bar",
//     marker: {
//         color: "#ea335d",
//         opacity: 0.6,
//     },
// };

// const barChartData = [barChartTrace1, barChartTrace2];

// const layout = {
//     barmode: "grouped",
//     paper_bgcolor: "#172042",
//     plot_bgcolor: "#172042",
//     showlegend: false,
//     margin: {
//         l: 30,
//         r: 30,
//         b: 30,
//         t: 30,
//         pad: 1,
//     },
//     font: {
//         color: "#6b6f8a"
//     },
// };

// Plotly.newPlot("barChart", barChartData, layout, config);

// // scientificChart
// let url = "https://raw.githubusercontent.com/alphatest722/testdata/90f5aab7619d100321626c78b18f735f715c1ac3/finance-charts-apple2.csv";
// let promise = d3.csv(url)
// console.log(promise)

// d3.csv(url, function (err, rows) {
//         function unpack(rows, key) {
//             return rows.map(function (row) {
//                 return row[key];
//             });
//         }

//         var trace1 = {
//             type: "scatter",
//             mode: "lines",
//             name: "AAPL High",
//             x: unpack(rows, "Date"),
//             y: unpack(rows, "AAPL.High"),
//             line: { color: "#ea335d" },
//         };

//         var trace2 = {
//             type: "scatter",
//             mode: "lines",
//             name: "AAPL Low",
//             x: unpack(rows, "Date"),
//             y: unpack(rows, "AAPL.Low"),
//             line: { color: "#03dcee" },
//         };

//         var data = [trace1, trace2];
//         const layout = {
//             paper_bgcolor: "#172042",
//             plot_bgcolor: "#172042",
//             showlegend: false,
//             margin: {
//                 l: 30,
//                 r: 30,
//                 b: 30,
//                 t: 30,
//                 pad: 1,
//             },
//             font: { color: "#6b6f8a" },
//             xaxis: {
//                 range: ["2016-07-01", "2017-02-01"],
//                 type: "date",
//             },
//             yaxis: {
//                 autorange: true,
//                 type: "linear",
//             },
//         };

//         Plotly.newPlot("scientificChart", data, layout, config);
//     });

// const pieChartData = [
//     {
//         values: [19, 26, 55],
//         labels: ["march", "april", "june"],
//         type: "pie"
//     },
// ];

const pieChartLayout = {
    paper_bgcolor: "#172042",
    plot_bgcolor: "#172042",
    piecolorway: ["#ea335d", "#03dcee", "#178add"],
    showlegend: false,
    margin: {
        l: 10,
        r: 10,
        b: 10,
        t: 10,
        pad: 1,
    },
    height: 300,
    wiedth: 300,
};

// Plotly.newPlot("pieChart", pieChartData, pieChartLayout);

const donutChartData = [
    {
        values: [38, 5, 4, 3],
        labels: ["Business Analyst", "Remote Data Analyst", "Data Analyst","Sr Functional Analyst"],
        hole: 0.4,
        type: "pie",
    },
];

Plotly.newPlot("donutChart", donutChartData, pieChartLayout);

d3.json("http://127.0.0.1:5000/api/title_count", function(data) {
    console.log(data);
    console.log( data['count'].length)
    
    for(x in data['count']){
        var _li = d3.select('#dash_id').append('li');
        _li.append('h4').text(data['title'][x]);
        _li.append('span').text(data['count'][x]);
    }
    

    // .append('span').text('234234';
  });

  d3.json("http://127.0.0.1:5000/api/min_max", function(data) {
    console.log(data);
    // console.log( data['count'].length)
    
    // for(x in data['count']){
    //     var _li = d3.select('#dash_id').append('li');
    //     _li.append('h4').text(data['title'][x]);
    //     _li.append('span').text(data['count'][x]);
    // }
    const barChartTrace1 = {
        x: data['title'],
        y: data['max_salary'],
        name: "Salary Max",
        type: "bar",
        marker: {
            color: "#ea335d",
        },
    
    };
    
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
        font: {
            color: "#6b6f8a"
        },
    };
    
    Plotly.newPlot("barChart", barChartData, layout, config);

    // .append('span').text('234234';
  });