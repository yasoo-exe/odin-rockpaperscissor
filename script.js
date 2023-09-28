//get computer's choice
let getComputerChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

// play a round
function playRound() {
  let userPoints = 0;
  let computerPoints = 0;
  let result = document.querySelector(".result");
  let final = document.querySelector(".final");
  let reset = document.querySelector(".reset");
  let liveuser = document.querySelector(".liveuser");
  let livecomp = document.querySelector(".livecomp");
  return function () {
    if (userPoints < 5 && computerPoints < 5) {
      //assign user and computer selection to variables using destructuring
      let [computerSelection, userSelection] = [getComputerChoice(), this.alt];
      console.log(computerSelection, userSelection);

      if (computerSelection === userSelection) {
        result.innerText = "it's a tie!";
      } else if (
        (computerSelection === "rock" && userSelection === "paper") ||
        (computerSelection === "paper" && userSelection === "scissors") ||
        (computerSelection === "scissors" && userSelection === "rock")
      ) {
        userPoints += 1;
        liveuser.innerText = userPoints;
        result.innerText = `You Win! ${userSelection} beats ${computerSelection}`;
      } else {
        computerPoints += 1;
        livecomp.innerText = computerPoints;
        result.innerText = `You Lose! ${computerSelection} beats ${userSelection}`;
      }
    }

    if (userPoints === 5 || computerPoints === 5) {
      result.innerText = `${
        userPoints > computerPoints ? "YOU WIN!" : "YOU LOST!"
      }`;
      reset.style.display = "flex";
      reset.addEventListener("click", () => {
        result.innerText = "";
        reset.style.display = "none";
        userPoints =
          computerPoints =
          liveuser.innerText =
          livecomp.innerText =
            0;
      });
    }
  };
}

let play = playRound();
let buttons = document.querySelectorAll("div[class='choices'] img");
Array.from(buttons).forEach((ele) => ele.addEventListener("click", play));
