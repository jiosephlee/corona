/* chart.js chart examples */
const canvas = document.getElementById('chart');
const ctx = canvas.getContext('2d');

// chart colors
var colors = ['#007bff','#28a745','#333333','#c3e6cb','#dc3545','#6c757d'];

/* large line chart */
var chartData = {
  labels: ["3/5","3/6","3/7","3/8", "3/9","3/10", "3/11 10:30AM","3/12 4:00PM", "3/13 2:00PM", "3/14 1:30PM", "3/15 12:00PM", "3/16 11:30AM", "3/17 10:30AM", "3/18 6:00PM"],
  datasets: [{
    data: [3,4,11,12,19,35, 46, 95, 154, 183, 269, 463, 644 , 1871],
    backgroundColor: 'transparent',
    borderColor: colors[0],
    borderWidth: 2,
    pointRadius: 4,
    pointBackgroundColor: colors[1]
  }]
};
new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: {
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
