
var trace1 = {
  x: ['Jan', 'Feb', 'Mar', 'Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  y: [4000, 7000, 9000, 6000,8000,4500,6700,800,5500,6700,8700,4300],
  name: 'Revenue',
  type: 'bar',
  marker: {color: '#50C878', opacity: 0.7}
};
var trace2 = {
  x: ['Jan', 'Feb', 'Mar', 'Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  y: [-6000, -8000, -4000, -8000,-3000,-5500,-7000,-6000, -8000, -4000, -8000,-3000],
  name: 'Costs',
  type: 'bar',
  textposition: 'outside',
  marker: {color: '#ff4500', opacity: 0.5}
};
var trace3 = {
  x: ['Jan', 'Feb', 'Mar', 'Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  y: [-5000, -6000, -3000, -6000,-2000,-4000,-5000,-5000, -6000, -3000, -6000,-2000],
  name: 'C.O.G.S.',
  type: 'scatter',
  line: {color: '#EF0107', width: 5}
 }
var trace6 = {
  x: ['Jan', 'Feb', 'Mar', 'Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  y: [-2000, -3000, -1000, -2000,-1000,-2000,-1000,-2000, -3000, -1000, -2000,-1000],
  name: 'Operations',
  type: 'scatter',
  line: {color: '#708090', width: 5}
 }
 var trace4 = {
  x: ['Jan', 'Feb', 'Mar', 'Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  y: [1000, 3000, 3000, 2000,3000,2000,4000,1000, 3000, 2000, 3000,4000],
  name: 'Net Profit',
  type: 'scatter',
  line: {width: 5, color: '#0000FF'}
 }

var trace5 = {
  x: ['Jan', 'Feb', 'Mar', 'Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  y: [4000, 5000, 7000, 5000,5000,6000,5900,4000, 6000, 5000, 6000,4000],
  name: 'Gross Profit',
  type: 'scatter',
  line: {width: 5,color: 'black'}
};

var data = [trace1, trace2, trace3, trace4, trace5,trace6];

var layout = {yaxis: 
{showgrid: false,visible:false},barmode: 'relative',
margin: {t:50,b:25,l:35,r:7}, font: {family: 'Arial', size: 14},
  borderRadius: '55px',title:"*hover on bars & lines"
};


var config = {displayModeBar: false};

Plotly.newPlot('mar', data, layout, config);
