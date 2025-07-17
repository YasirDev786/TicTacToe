const buttons = document.getElementsByClassName("btn");
let currentPlayerText = "X";
player1 = document.getElementById("player1");
player2 = document.getElementById("player2");
const heading = document.createElement("h1");
const div = document.querySelector(".result");

let currentPlayer = player1;
const arr = Array.from(buttons);
let count = 0;
currentPlayer.classList.add("bounce");

let result;

// Winning Patterns

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

arr.forEach((button) => {
  button.onclick = () => {
    count++;
    result = 0;
    if (button.innerHTML !== "") {
      alert("Try Again! Invalid Click");
      return;
    }

    button.classList.add("style-text");
    button.textContent = currentPlayerText;
    currentPlayer.classList.remove("bounce");

    // Check Winner

    result = checkWinner();

    if (result) {
      heading.textContent = `${currentPlayer.textContent} Wins`;
      div.appendChild(heading);
      return;
    } else if (count == 9) {
      heading.textContent = "Draw Game!";
      div.appendChild(heading);
      return;
    }
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    currentPlayerText = currentPlayerText === "X" ? "O" : "X";

    currentPlayer.classList.add("bounce");
  };
});

function checkWinner() {
  for (let patter of winPatterns) {
    let value1 = buttons[patter[0]].innerText;
    let value2 = buttons[patter[1]].innerText;
    let value3 = buttons[patter[2]].innerText;
    console.log(value1);
    console.log(value2);
    console.log(value3);
    if (value1 != "" && value2 != "" && value3 != "") {
      if (value1 === value2 && value2 === value3) return 1;
    }
  }
  return 0;
}

function endGame() {
  div.removeChild(heading);
  count = 0;
  result = 0;
  currentPlayer.classList.remove("bounce");
  currentPlayer = player1;
  currentPlayer.classList.add("bounce");
  currentPlayerText = "X";
  const buttons = document.getElementsByClassName("btn");
  const arr = Array.from(buttons);
  arr.forEach((button) => {
    button.innerHTML = "";
  });
}
