//get computer's choice
let getComputerChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

//get user's choice
let getuserChoice = () => {
  let choiceMade = prompt(
    "Enter your choice (rock/paper/scissors):"
  ).toLowerCase();
  return choiceMade;
};

//play a round
let playRound = (param1, param2) => {
  let [computerSelection, userSelection] = [
    getComputerChoice(),
    getuserChoice(),
  ];

  let result = "";

  if (computerSelection === userSelection) {
    console.log("it's a tie!");
    result = "tie";
  } else if (
    (computerSelection === "rock" && userSelection === "paper") ||
    (computerSelection === "paper" && userSelection === "scissors") ||
    (computerSelection === "scissors" && userSelection === "rock")
  ) {
    console.log(`You Win! ${userSelection} beats ${computerSelection}`);
    result = "user";
  } else {
    console.log(`You Lose! ${computerSelection} beats ${userSelection}`);
    result = "computer";
  }
};

playRound();
