/* chart.js chart examples */
const canvas = document.getElementById('chart');
const ctx = canvas.getContext('2d');
const canvas2 = document.getElementById('chart2');
const ctx2 = canvas2.getContext('2d');
// chart colors
var colors = ['#FF0000','#FF6347','#007bff','#28a745','#333333','#c3e6cb','#dc3545','#6c757d'];

/* large line chart */
var casesData = {
  labels: ["3/1","3/2","3/3","3/4","3/5","3/6","3/7","3/8", "3/9","3/10", "3/11","3/12", "3/13", "3/14", "3/15", "3/16", "3/17", "3/18","3/19","3/20","3/21","3/22","3/23","3/24"],
  datasets:[{
    data: [1,1,2,2,4,7,12,14,25,32, 53, 88, 137, 185, 269, 464, 923, 1871, 3954, 5683, 8115,10764,13119,14776],
    backgroundColor: 'transparent',
    borderColor: colors[1],
    borderWidth: 2,
    pointRadius: 4,
    pointBackgroundColor: colors[0]
  }]
};
var deathsData = {
  labels: ["3/18","3/19","3/20","3/21","3/22","3/23","3/24"],
  datasets:[{
    data: [19, 26, 43,60,81,125,192],
    backgroundColor: 'transparent',
    borderColor: "#000000",
    borderWidth: 2,
    pointRadius: 4,
    pointBackgroundColor: "#000000"
  }]
};

new Chart(ctx, {
    type: 'line',
    data: casesData,
    options: {
      title: {
            display: true,
            Color: colors[1],
            text: 'Confirmed Cases'
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

new Chart(ctx2, {
    type: 'line',
    data: deathsData,
    options: {
      title: {
            display: true,
            Color: colors[1],
            text: 'Deaths'
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
