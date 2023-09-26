//get computer's choice
let getComputerChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

// play a round
function playRound() {
  let userPoints = 0;
  let computerPoints = 0;
  return function () {
    if (userPoints < 5 && computerPoints < 5) {
      //assign user and computer selection to variables using destructuring
      let [computerSelection, userSelection] = [
        getComputerChoice(),
        this.innerText.toLowerCase(),
      ];

      let result = document.querySelector(".result");

      if (computerSelection === userSelection) {
        result.innerText = "it's a tie!";
      } else if (
        (computerSelection === "rock" && userSelection === "paper") ||
        (computerSelection === "paper" && userSelection === "scissors") ||
        (computerSelection === "scissors" && userSelection === "rock")
      ) {
        userPoints += 1;
        result.innerText = `You Win! ${userSelection} beats ${computerSelection}`;
      } else {
        computerPoints += 1;
        result.innerText = `You Lose! ${computerSelection} beats ${userSelection}`;
      }
    }

    if (userPoints === 5 || computerPoints === 5) {
      document.querySelector(".final").innerText = `${
        userPoints > computerPoints ? "YOU WIN!" : "YOU LOST!"
      }`;
      document.querySelector(".reset").style.display = "block";
      document.querySelector(".reset").addEventListener("click", () => {
        userPoints = 0;
        computerPoints = 0;
        document.querySelector(".result").innerText = "";
        document.querySelector(".final").innerText = "";
        document.querySelector(".reset").style.display = "none";
      });
    }
  };
}

let play = playRound();

let buttons = document.querySelectorAll("div[class='choices'] button");

Array.from(buttons).forEach((ele) => ele.addEventListener("click", play));
