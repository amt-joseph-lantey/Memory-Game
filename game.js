// declaring variables
const gameSetup = document.getElementById("gamesetup");
const gameboard4x4Solo = document.getElementById("gameboard_4x4_start_solo");
const gameboard6x6Solo = document.getElementById("gameboard_6X6_start_solo");
const gameboard4x4Multi = document.getElementById("gameboard_4x4_start");
const gameboard6x6Multi = document.getElementById("gameboard_6X6_start");
const numberBtn = document.getElementById("number_btn");
const iconBtn = document.getElementById("icon_btn");
const player1Btn = document.querySelector(".player1");
const players2Btn = document.querySelector(".players2");
const players3Btn = document.querySelector(".players3");
const players4Btn = document.querySelector(".players4");
const fourByFourBtn = document.querySelector(".fourbyfour");
const sixBySixBtn = document.querySelector(".sixbysix");
const startGameBtn = document.querySelector(".startgame_btn");
const playersContainer = document.querySelector(".playerscontainer");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const player3 = document.getElementById("player3");
const player4 = document.getElementById("player4");



// Hide all sections except the first one
[...document.querySelectorAll("section")].forEach(section => {
  if (section !== gameSetup) {
    section.style.display = "none";
  }
});

// Set the default values for theme, grid size, and number of players
let theme = "number";
let gridSize = "4x4";
let numPlayers = 1;

// selecting buttons to display the gameSetup function
numberBtn.addEventListener("click", function() {
  theme = "number";
  iconBtn.classList.remove("selected");
  numberBtn.classList.add("selected");
});

iconBtn.addEventListener("click", function() {
  theme = "icon";
  numberBtn.classList.remove("selected");
  iconBtn.classList.add("selected");
});

player1Btn.addEventListener("click", function() {
  numPlayers = 1;
  player1Btn.classList.add("selected");
  players2Btn.classList.remove("selected");
  players3Btn.classList.remove("selected");
  players4Btn.classList.remove("selected");
});

players2Btn.addEventListener("click", function() {
  numPlayers = 2;
  player1Btn.classList.remove("selected");
  players2Btn.classList.add("selected");
  players3Btn.classList.remove("selected");
  players4Btn.classList.remove("selected");
  player3.style.display = "none";
  player4.style.display = "none";

});

players3Btn.addEventListener("click", function() {
  numPlayers = 3;
  player1Btn.classList.remove("selected");
  players2Btn.classList.remove("selected");
  players3Btn.classList.add("selected");
  players4Btn.classList.remove("selected");
  player4.style.display = "none";
});

players4Btn.addEventListener("click", function() {
  numPlayers = 4;
  player1Btn.classList.remove("selected");
  players2Btn.classList.remove("selected");
  players3Btn.classList.remove("selected");
  players4Btn.classList.add("selected");
});

fourByFourBtn.addEventListener("click", function() {
  gridSize = "4x4";
  fourByFourBtn.classList.add("selected");
  sixBySixBtn.classList.remove("selected");
});

sixBySixBtn.addEventListener("click", function() {
  gridSize = "6x6";
  fourByFourBtn.classList.remove("selected");
  sixBySixBtn.classList.add("selected");
});

startGameBtn.addEventListener("click", function() {
  if (theme && gridSize && numPlayers) {
    setupGame(theme, gridSize, numPlayers);
  } else {
    alert("Please select a button");
  }
});

// display gameboard according the selected theme,gridsize and number of players
function setupGame(theme, gridSize, numPlayers) {
  if ((theme === "icon") && gridSize === "6x6" && (numPlayers === 2 || numPlayers === 3 || numPlayers === 4 )) {
    gameboard6x6Multi.style.display = "block";
    gameSetup.style.display = "none";
    gameboard4x4Multi.style.display = "none";
    gameboard6x6Solo.style.display = "none";
    gameboard4x4Solo.style.display = "none";
    const iconValues6x6Multi = iconValues.slice(18, 36).concat(iconValues.slice(18, 36)).sort(() => Math.random() - 0.5);
    const iconCards6x6Multi = document.querySelectorAll(".card6x6_multi");
    iconCards6x6Multi.forEach((card, index) => {
    const icon4 = document.createElement('i');
    icon4.className = "fa " + iconValues6x6Multi[index];
    card.appendChild(icon4);
    });
  } else if(theme === "number" && gridSize === "6x6" && (numPlayers === 2 || numPlayers === 3 || numPlayers === 4 )) {
    gameboard6x6Multi.style.display = "block";
    gameSetup.style.display = "none";
    gameboard4x4Multi.style.display = "none";
    gameboard6x6Solo.style.display = "none";
    gameboard4x4Solo.style.display = "none";
    const numberValues6x6Multi = numberValues.slice(18, 36).concat(numberValues.slice(18, 36)).sort(() => Math.random() - 0.5);
    const numberCards6x6Multi = document.querySelectorAll( ".card6x6_multi");
    numberCards6x6Multi.forEach((card, index) => {
    card.dataset.value = numberValues6x6Multi[index];
    });
  } else if (theme === "icon" && gridSize === "6x6" && numPlayers === 1) {
    gameboard6x6Multi.style.display = "none";
    gameSetup.style.display = "none";
    gameboard4x4Multi.style.display = "none";
    gameboard6x6Solo.style.display = "block";
    gameboard4x4Solo.style.display = "none";
    const iconValues6x6Solo = iconValues.slice(0, 18).concat(iconValues.slice(0, 18)).sort(() => Math.random() - 0.5);
    const iconCards6x6Solo = document.querySelectorAll(".card6x6_solo");
    iconCards6x6Solo.forEach((card, index) => {
    const icon3 = document.createElement('i');
    icon3.className = "fa " + iconValues6x6Solo[index];
    card.appendChild(icon3);
    });
  } else if (theme === "number" && gridSize === "6x6" && numPlayers === 1) {
    gameboard6x6Multi.style.display = "none";
    gameSetup.style.display = "none";
    gameboard4x4Multi.style.display = "none";
    gameboard6x6Solo.style.display = "block";
    gameboard4x4Solo.style.display = "none";
    const numberValues6x6Solo = numberValues.slice(0, 18).concat(numberValues.slice(0, 18)).sort(() => Math.random() - 0.5);
    const numberCards6x6Solo = document.querySelectorAll(".card6x6_solo");
    numberCards6x6Solo.forEach((card, index) => {
    card.dataset.value = numberValues6x6Solo[index];
    });
  } else if(theme === "icon" && gridSize === "4x4" && numPlayers === 1) {
    gameboard6x6Multi.style.display = "none";
    gameSetup.style.display = "none";
    gameboard4x4Multi.style.display = "none";
    gameboard6x6Solo.style.display = "none";
    gameboard4x4Solo.style.display = "block";
    const iconValues4x4Solo = iconValues.slice(0, 8).concat(iconValues.slice(0, 8)).sort(() => Math.random() - 0.5);
    const iconCards4x4Solo = document.querySelectorAll(".card4x4_solo");
    iconCards4x4Solo.forEach((card, index) => {
    const icon = document.createElement('i');
    icon.className = "fa " + iconValues4x4Solo[index];
    card.appendChild(icon);
    });
  } else if(theme === "number" && gridSize === "4x4" && numPlayers === 1) {
    gameboard6x6Multi.style.display = "none";
    gameSetup.style.display = "none";
    gameboard4x4Multi.style.display = "none";
    gameboard6x6Solo.style.display = "none";
    gameboard4x4Solo.style.display = "block";
    const numberValues4x4Solo = numberValues.slice(0, 8).concat(numberValues.slice(0, 8)).sort(() => Math.random() - 0.5);
    const numberCards4x4Solo = document.querySelectorAll(".card4x4_solo");
    numberCards4x4Solo.forEach((card, index) => {
    card.dataset.value = numberValues4x4Solo[index];
    });
  } else if (theme === "icon" && gridSize === "4x4"&& (numPlayers === 2 || numPlayers === 3 || numPlayers === 4)) {
    gameboard6x6Multi.style.display = "none";
    gameSetup.style.display = "none";
    gameboard4x4Multi.style.display = "block";
    gameboard6x6Solo.style.display = "none";
    gameboard4x4Solo.style.display = "none";
    const iconValues4x4Multi = iconValues.slice(9, 17).concat(iconValues.slice(9, 17)).sort(() => Math.random() - 0.5);
    const iconCards4x4Multi = document.querySelectorAll(".card4x4_multi");
    iconCards4x4Multi.forEach((card, index) => {
    const icon2 = document.createElement('i');
    icon2.className = "fa " + iconValues4x4Multi[index];
    card.appendChild(icon2);
    });
  } else if (theme === "number" && gridSize === "4x4" && (numPlayers === 2 || numPlayers === 3 || numPlayers === 4)) {
    gameboard6x6Multi.style.display = "none";
    gameSetup.style.display = "none";
    gameboard4x4Multi.style.display = "block";
    gameboard6x6Solo.style.display = "none";
    gameboard4x4Solo.style.display = "none";
    const numberValues4x4Multi = numberValues.slice(9, 17).concat(numberValues.slice(9, 17)).sort(() => Math.random() - 0.5);
    const numberCards4x4Multi = document.querySelectorAll( ".card4x4_multi");
    numberCards4x4Multi.forEach((card, index) => {
    card.dataset.value = numberValues4x4Multi[index];
    });

  } else(alert("select a button"))
}

// // Number values and icon value
const numberValues = [1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37];
const iconValues = ["fa-address-book","fa-bell","fa-calendar","fa-music","fa-car","fa-star","fa-check","fa-cloud","fa-cog","fa-comment","fa-envelope","fa-file","fa-flag","fa-folder","fa-globe","fa-heart","fa-home","fa-image","fa-info","fa-key","fa-lock","fa-map","fa-phone","fa-play","fa-plus","fa-question","fa-search","fa-server","fa-shopping-cart","fa-signal","fa-star","fa-tag","fa-thumbs-up","fa-times","fa-trash","fa-user","fa-video","fa-wrench"];

// duplicate,shuffle and assign icon values to the 4x4 and 6x6 boards
// const iconValues4x4Solo = iconValues.slice(0, 8).concat(iconValues.slice(0, 8)).sort(() => Math.random() - 0.5);
// const iconCards4x4Solo = document.querySelectorAll(".card4x4_solo");
// iconCards4x4Solo.forEach((card, index) => {
//   const icon = document.createElement('i');
//   icon.className = "fa " + iconValues4x4Solo[index];
//   card.appendChild(icon);
// });

// const iconValues4x4Multi = iconValues.slice(9, 17).concat(iconValues.slice(9, 17)).sort(() => Math.random() - 0.5);
// const iconCards4x4Multi = document.querySelectorAll(".card4x4_multi");
// iconCards4x4Multi.forEach((card, index) => {
//   const icon2 = document.createElement('i');
//   icon2.className = "fa " + iconValues4x4Multi[index];
//   card.appendChild(icon2);
// });

// const iconValues6x6Solo = iconValues.slice(0, 18).concat(iconValues.slice(0, 18)).sort(() => Math.random() - 0.5);
// const iconCards6x6Solo = document.querySelectorAll(".card6x6_solo");
// iconCards6x6Solo.forEach((card, index) => {
//   const icon3 = document.createElement('i');
//   icon3.className = "fa " + iconValues6x6Solo[index];
//   card.appendChild(icon3);
// });

// const iconValues6x6Multi = iconValues.slice(18, 36).concat(iconValues.slice(18, 36)).sort(() => Math.random() - 0.5);
// const iconCards6x6Multi = document.querySelectorAll(".card6x6_multi");
// iconCards6x6Multi.forEach((card, index) => {
//   const icon4 = document.createElement('i');
//   icon4.className = "fa " + iconValues6x6Multi[index];
//   card.appendChild(icon4);
// });

// duplicate,shuffle and assign number values to the 4x4 and 6x6 boards
// const numberValues4x4Solo = numberValues.slice(0, 8).concat(numberValues.slice(0, 8)).sort(() => Math.random() - 0.5);
// const numberCards4x4Solo = document.querySelectorAll(".card4x4_solo");
// numberCards4x4Solo.forEach((card, index) => {
//   card.dataset.value = numberValues4x4Solo[index];
// });

// const numberValues4x4Multi = numberValues.slice(9, 17).concat(numberValues.slice(9, 17)).sort(() => Math.random() - 0.5);
// const numberCards4x4Multi = document.querySelectorAll( ".card4x4_multi");
// numberCards4x4Multi.forEach((card, index) => {
//   card.dataset.value = numberValues4x4Multi[index];
// });

// const numberValues6x6Solo = numberValues.slice(0, 18).concat(numberValues.slice(0, 18)).sort(() => Math.random() - 0.5);
// const numberCards6x6Solo = document.querySelectorAll(".card6x6_solo");
// numberCards6x6Solo.forEach((card, index) => {
//   card.dataset.value = numberValues6x6Solo[index];
// });

// const numberValues6x6Multi = numberValues.slice(18, 36).concat(numberValues.slice(18, 36)).sort(() => Math.random() - 0.5);
// const numberCards6x6Multi = document.querySelectorAll( ".card6x6_multi");
// numberCards6x6Multi.forEach((card, index) => {
//   card.dataset.value = numberValues6x6Multi[index];
// });



// click first and second card,checking for match or not
let clickedCards = 0;
let firstCard, secondCard;

let cards = document.querySelectorAll(".card4x4_solo,.card4x4_multi,.card6x6_multi,.card6x6_solo");

cards.forEach(card => {
  card.addEventListener("click", () => {
    if (clickedCards < 2) {
      clickedCards++;

      if (clickedCards === 1) {
        firstCard = card;
      
        // card.textContent = card.dataset.value;
        firstCard.querySelector("i").style.opacity = 1;
        card.style.backgroundColor = "#BCCED9";
        
      } else {
        secondCard = card;
        // card.textContent = card.dataset.value;
        secondCard.querySelector("i").style.opacity = 1;
        card.style.backgroundColor = "#BCCED9";
       
        if (firstCard.querySelector("i").className === secondCard.querySelector("i").className) {
          // Match
          card.classList.add("matched-card");
          firstCard.style.backgroundColor = "#FDA214";
          secondCard.style.backgroundColor = "#FDA214";
          firstCard.removeEventListener("click", null);
          secondCard.removeEventListener("click", null);
        } else {
          // No match
          setTimeout(() => {
            // firstCard.textContent = "";
            // secondCard.textContent = "";
            firstCard.style.backgroundColor = "";
            secondCard.style.backgroundColor = "";
            // firstCard.textContent = ""; // remove the displayed dataset.value
            // secondCard.textContent = ""; // remove the displayed dataset.value
            firstCard.querySelector("i").style.opacity = 0;
            secondCard.querySelector("i").style.opacity = 0;
            clickedCards = 0;
          }, 200);
        }

        clickedCards = 0;
      }
    }
  });
});

// the time and move set up
const timecount_solo = document.querySelector(".timecount_solo");
const movescount_solo = document.querySelector(".movescount_solo");

// Set initial timer and moves count
let timer = 0;
let moves = 0;

// Update the timer every second
setInterval(() => {
  timer++;
  timecount_solo.textContent = `${Math.floor(timer / 60)}:${(timer % 60).toString().padStart(2, '0')}`;
}, 1000);

// Update the moves count whenever a move is made
function incrementMoves() {
  moves++;
  movescount_solo.textContent = moves;
}

// Add an event listener to each card element to increment the moves count when clicked
cards.forEach(card => {
  card.addEventListener("click", incrementMoves);
});