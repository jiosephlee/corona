/* chart.js chart examples */
const canvas = document.getElementById('chart');
const ctx = canvas.getContext('2d');

// chart colors
var colors = ['#FF0000','#FF6347','#007bff','#28a745','#333333','#c3e6cb','#dc3545','#6c757d'];

/* large line chart */
var chartData = {
  labels: ["3/1","3/2","3/3","3/4","3/5","3/6","3/7","3/8", "3/9","3/10", "3/11","3/12", "3/13", "3/14", "3/15", "3/16", "3/17", "3/18","3/19"],
  datasets: [{
    data: [1,1,2,2,4,7,12,14,25,32, 53, 88, 137, 185, 269, 464, 923, 1871, 3954],
    backgroundColor: 'transparent',
    borderColor: colors[1],
    borderWidth: 2,
    pointRadius: 4,
    pointBackgroundColor: colors[0]
  }]
};
new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: {
      title: {
            display: true,
            Color: colors[1],
            text: 'The Curve'
        },
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      },
      responsive: true
    }
    });
