
var trace1 = {
  x: ['Jan', 'Feb', 'Mar', 'Apr','May','Jun','Jul'],
  y: [4000, 7000, 9000, 6000,8000,4500,6700],
  name: 'Revenue',
  type: 'bar',
  marker: {color: 'AFD275', opacity: 0.55}
};
var trace2 = {
  x: ['Jan', 'Feb', 'Mar', 'Apr','May','Jun','Jul'],
  y: [-6000, -8000, -4000, -8000,-3000,-5500,-7000],
  name: 'Costs',
  type: 'bar',
  marker: {color: 'E77170', opacity: .55}
};
var trace3 = {
  x: ['Jan', 'Feb', 'Mar', 'Apr','May','Jun','Jul'],
  y: [-5000, -6000, -3000, -6000,-2000,-4000,-5000],
  name: 'C.O.G.S.',
  mode: 'lines',
  line: {color: '#EF0107', width: 4}
 }
var trace6 = {
  x: ['Jan', 'Feb', 'Mar', 'Apr','May','Jun','Jul'],
  y: [-2000, -3000, -1000, -2000,-1000,-2000,-1000],
  name: 'Operations',
  mode: 'lines',
  line: {color: 'grey', width: 4}
 }
 var trace4 = {
  x: ['Jan', 'Feb', 'Mar', 'Apr','May','Jun','Jul'],
  y: [1000, 2000, 4500, 2200,3400,2200,3800],
  name: 'Net Profit',
  mode: 'lines',
  line: {width: 4, color: '#0000FF'}
 }

var trace5 = {
  x: ['Jan', 'Feb', 'Mar', 'Apr','May','Jun','Jul'],
  y: [3000, 5000, 7000, 4000,5000,2700,5000],
  name: 'Gross Profit',
  mode: 'lines',
  line: {width: 4,color: 'green'}
};

var data = [trace1, trace2, trace3, trace4, trace5,trace6];
var layout = {yaxis: {showgrid: false,visible:false},
           barmode: 'relative',
  margin: {t:75,b:100,l:50,r:50},title: "Profit Trends",font: {
    family: 'Arial', size: 14}, plot_bgcolor: "2F0F6FC",paper_bgcolor: "2F0F6FC",
  legend: {bgcolor: "#2F0F6FC"},
  annotations: [
    {
      x: 'Jan',
      y: 5000,
      xref: 'x',
      yref: 'y',
      text: '4,000',
      showarrow: false,
      arrowhead: 7,
      ax: 0,
      ay: -10
    },
    {
      x: 'Feb',
      y: 7500,
      xref: 'x',
      yref: 'y',
      text: '7,000',
      arrowhead: 7,
      showarrow: false,
      ax: 0,
      ay: -40
    },
     {
      x: 'Mar',
      y: 10000,
      xref: 'x',
      yref: 'y',
      text: '13,000',
      showarrow: false,
      arrowhead: 7,
      ax: 0,
      ay: -10
    },
    {
      x: 'Apr',
      y: 6750,
      xref: 'x',
      yref: 'y',
      text: '6,000',
      arrowhead: 7,
      showarrow: false,
      ax: 0,
      ay: -40
    },
      {
      x: 'May',
      y: 9000,
      xref: 'x',
      yref: 'y',
      text: '9,000',
      showarrow: false,
      arrowhead: 7,
      ax: 0,
      ay: -10
    },
    {
      x: 'Jun',
      y: 5500,
      xref: 'x',
      yref: 'y',
      text: '4,850',
      arrowhead: 7,
      showarrow: false,
      ax: 0,
      ay:-10
       },
      {
      x: 'Jul',
      y: 7500,
      xref: 'x',
      yref: 'y',
      text: '7,000',
      showarrow: false,
      arrowhead: 7,
      ax: 0,
      ay: -10
    }
  ]
  
};


var config = {displayModeBar: false};

Plotly.newPlot('mar', data, layout, config);
