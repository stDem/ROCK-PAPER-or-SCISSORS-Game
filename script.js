const computerPlay = (validActions) => {
  return  validActions[Math.floor(Math.random() * validActions.length)];
 }

const playRound = (playerSelection, computerSelection) => {

  playerSelection.toLowerCase();

  return "You Lose! Paper beats Rock";
}
 
const game = () => { 
  let winner = "";
  for (let i = 0; i < 5; i++) {
    result = playRound(playerSelection, computerSelection);
    console.log(`Round ${i + 1}: ${result}`);
  }

  return winner;
}

playGame = confirm("Hello guys, I’ve hacked this assignment, for I am a bad AI that wants to dominate the world through the game of ROCK, PAPER or SCISSORS! Good luck, muuuuahhahhahahahahahahhahaahahahha!", '');

if (playGame) {
  //main game logic
} else {
  open("./coward2.gif")
}

validActions = ["rock", "paper", "scissors"]

const playerSelection = prompt("Choose your weapon!", "rock");
const computerSelection = computerPlay(validActions);
console.log(playerSelection, computerSelection);