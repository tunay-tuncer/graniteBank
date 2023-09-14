const themeButton = document.querySelector("#themeButton");
const root = document.querySelector(':root');



const colors = {
    textLight: "#121F3E",
    textGreyLight: "#93B0C8",
    backgroundWhite: "#ffffff",
    containerWhite: "#E9F0F3",
    lightGrayLight: "#CDD3DE",


    textWhite: "#ffffff",
    textGrey: "#767678",
    backgroundBlack: "#121213",
    containerBlack: "#1A1A1E",
    lightGray: "#252529",
}


let theme = "dark"
function switchTheme(){
    if(theme == "dark"){
        root.style.setProperty('--backgroundBlack', colors.backgroundWhite);
        root.style.setProperty('--containerBlack', colors.containerWhite);
        root.style.setProperty('--textWhite', colors.textLight);
        root.style.setProperty('--textGrey', colors.textGreyLight);
        root.style.setProperty('--lightGray', colors.lightGrayLight);

        chart.updateOptions({
          series: [70,5,5,5],
          legend: {
            labels: {colors: colors.textLight}
          }

        });

        theme = "light"
    }
    else{
        root.style.setProperty('--backgroundBlack', colors.backgroundBlack);
        root.style.setProperty('--containerBlack', colors.containerBlack);
        root.style.setProperty('--textWhite', colors.textWhite);
        root.style.setProperty('--textGrey', colors.textGrey);
        root.style.setProperty('--lightGray', colors.lightGray);

        chart.updateOptions({
          series: [44, 10, 5, 0],
          legend: {
            labels: {colors: colors.textWhite}
          }
        });

        theme = "dark"
    }
}


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
        colors: colors.textWhite,
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
    show: false, 
  },
  tooltip: {
    y: {
      formatter: function (value) {
        return value+"%"
      }
    },
    fillSeriesColor: false,
    marker: {
      show:false,
    }
  }
}



var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


themeButton.addEventListener("click", switchTheme)