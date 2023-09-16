const themeButton = document.querySelector("#themeButton");
const root = document.querySelector(':root');

const cards = document.querySelector(".cards");
const platinumContainer = document.querySelector(".platinumContainer");
const goldContainer = document.querySelector(".goldContainer");
const addCardButton = document.querySelector(".addCard");

const alertDiv = document.querySelector(".alertDiv");
const closeNotification = document.querySelector("#closeNotification");
const alertTimerBar = document.querySelector(".alertTimerBar");


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

	orange: "#FFB41F",
    orange2: "#F5A300"
}

let platinumCardCount = platinumContainer.childElementCount
let goldContainerCardCount = goldContainer.childElementCount
let theme = "dark"

function switchTheme(){
    if(theme == "dark"){
        root.style.setProperty('--backgroundBlack', colors.backgroundWhite);
        root.style.setProperty('--containerBlack', colors.containerWhite);
        root.style.setProperty('--textWhite', colors.textLight);
        root.style.setProperty('--textGrey', colors.textGreyLight);
        root.style.setProperty('--lightGray', colors.lightGrayLight);

        chart.updateOptions({
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
          legend: {
            labels: {colors: colors.textWhite}
          }
        });

        theme = "dark"
    }
}


var options = {
    series: [25, 7, 22, 15],
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

const cardType = "gold"
function createCard(){
	if(cardType == "gold"){

		//Top
		const topDiv = document.createElement("div");
		topDiv.classList.add("top")

		const graniteCardText = document.createElement("p");
		graniteCardText.textContent = "Granite Card";

		const cardTypeText = document.createElement("p");
		cardTypeText.classList.add("cardTypeText")
		cardTypeText.textContent = "Gold Debit";

		topDiv.appendChild(graniteCardText);
		topDiv.appendChild(cardTypeText);

		//Chip
		const chipDiv = document.createElement("div");
		const chipImg = document.createElement("img");
		chipImg.setAttribute("id", "chipImg");
		chipImg.src = "images/cardChip.png"

		chipDiv.appendChild(chipImg);

		//CardNumber
		const cardNumber = document.createElement("h1");
		cardNumber.classList.add("cardNumber");
		cardNumber.textContent = "9876 5432 1098 7654";

		//Bottom
		const bottomDiv = document.createElement("div");
		bottomDiv.classList.add("bottom");

		const validationText = document.createElement("p");
		validationText.textContent = "Valid Thru 09/25";

		const visaImg = document.createElement("img");
		visaImg.setAttribute("id", "visaImg");
		visaImg.src = "images/visa.png";

		bottomDiv.appendChild(validationText);
		bottomDiv.appendChild(visaImg)

		//Combining Everything
		const newCard = document.createElement("div");
		newCard.classList.add("cardFrontFace");
		newCard.classList.add("gold");
		newCard.classList.add("cardBottom");

		newCard.appendChild(topDiv);
		newCard.appendChild(chipDiv);
		newCard.appendChild(cardNumber);
		newCard.appendChild(bottomDiv);

		goldContainer.appendChild(newCard)

	}
	else if(cardType == "platinum"){
		//Top
		const topDiv = document.createElement("div");
		topDiv.classList.add("top")

		const graniteCardText = document.createElement("p");
		graniteCardText.textContent = "Granite Card";

		const cardTypeText = document.createElement("p");
		cardTypeText.classList.add("cardTypeText")
		cardTypeText.textContent = "Gold Debit";

		topDiv.appendChild(graniteCardText);
		topDiv.appendChild(cardTypeText);

		//Chip
		const chipDiv = document.createElement("div");
		const chipImg = document.createElement("img");
		chipImg.setAttribute("id", "chipImg");
		chipImg.src = "images/cardChip.png"

		chipDiv.appendChild(chipImg);

		//CardNumber
		const cardNumber = document.createElement("h1");
		cardNumber.classList.add("cardNumber");
		cardNumber.textContent = "9876 5432 1098 7654";

		//Bottom
		const bottomDiv = document.createElement("div");
		bottomDiv.classList.add("bottom");

		const validationText = document.createElement("p");
		validationText.textContent = "Valid Thru 09/25";

		const visaImg = document.createElement("img");
		visaImg.setAttribute("id", "visaImg");
		visaImg.src = "images/visa.png";

		bottomDiv.appendChild(validationText);
		bottomDiv.appendChild(visaImg)

		//Combining Everything
		const newCard = document.createElement("div");
		newCard.classList.add("cardFrontFace");
		newCard.classList.add("gold");
		newCard.classList.add("cardBottom");

		newCard.appendChild(topDiv);
		newCard.appendChild(chipDiv);
		newCard.appendChild(cardNumber);
		newCard.appendChild(bottomDiv);

		goldContainer.appendChild(newCard)
	}
}


function addCardFunc(){
	createCard()
  alert()
}

function alert(){
  alertDiv.style.height = "6rem";
  alertDiv.style.opacity = "1";
  alertTimer()
}

function closeAlert(){
  alertDiv.style.height = "0";
  alertDiv.style.opacity= "0";
  alertTimerBar.style.animation = ""
}

function alertTimer(){
  let alertTimerBarWidth  = alertTimerBar.offsetWidth;
  alertTimerBar.style.animation = "alertBar 3s "
  setTimeout(closeAlert, 3000);
}

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

themeButton.addEventListener("click", switchTheme)
addCardButton.addEventListener("click", addCardFunc)
closeNotification.addEventListener("click", closeAlert)

console.log(alertTimerBarWidth)