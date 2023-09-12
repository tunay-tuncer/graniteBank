var options = {
    series: [44, 10, 5, 0],
    chart: {
    width: 400,
    type: 'donut',
  },
  dataLabels: {
    enabled: false
  },
  labels: ['Housing', 'Transportation', 'Food', 'Internet Expense'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        show: false
      }
    }
  }],
  legend: {
    position: 'right',
    offsetY: 0,
    height: 230,
    fontSize: "12px",
    fontFamily: "Poppins",
    labels: {
        colors: "white",
        useSeriesColors: false
    },
    markers: {
        fillColors: ['#1A667A', '#f69679', '#fff799', '#8781bd']
    }
  },
  fill: {
    colors: ['#1A667A', '#f69679', '#fff799', '#8781bd'],
  },
  stroke: {
    show: false, // Set this to false to remove the white stroke
  },
  tooltip: {
    y: {
      formatter: function (value) {
        // Customize the tooltip value here
        return value+"%"
      }
    }
  }
};


var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();