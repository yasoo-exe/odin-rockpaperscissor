let getComputerChoice = () => {
    let choices = ["rock", 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

let userChoice = () => {
    return (prompt("Enter your choice (rock/paper/scissors):").toLowerCase());
}
