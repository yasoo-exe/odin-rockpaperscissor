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
    return "tie";
  } else if (
    (computerSelection === "rock" && userSelection === "paper") ||
    (computerSelection === "paper" && userSelection === "scissors") ||
    (computerSelection === "scissors" && userSelection === "rock")
  ) {
    console.log(`You Win! ${userSelection} beats ${computerSelection}`);
    return "user";
  } else {
    console.log(`You Lose! ${computerSelection} beats ${userSelection}`);
    return "computer";
  }
};

//5 rounds of the game and the final result function
let game = () => {
  let i = 1;
  let user = 0;
  let computer = 0;
  while (i < 6) {
    let result = playRound();
    result === "user" ? (user += 1) : (computer += 1);
    i++;
  }
  user > computer
    ? console.log("You are the champ!")
    : computer > user
    ? console.log("Better luck next time!")
    : console.log("This round's tied!");
};

game();
