// ANASTASIIA
const computerPlay = (validActions) => { 

  return  randomAction;
}

// STEF
const playerPlay = () => { 
  const playerSelection = prompt("Choose your weapon!", "rock");
  return ;
}

// ANASTASIIA
const playRound = (playerSelection, computerSelection) => {

  playerSelection.toLowerCase();

  return "You Lose! Paper beats Rock";
}
 
// ANASTASIIA
const play = (playerSelection, computerSelection) => { 
  let winner = "";
  for (let i = 0; i < 5; i++) {
    result = playRound(playerSelection, computerSelection);
    console.log(`Round ${i + 1}: ${result}`);
  }

  return winner;
}

// STEF
const game = () => {
  playGame = confirm("Hello guys, I’ve hacked this assignment, for I am a bad AI that wants to dominate the world through the game of ROCK, PAPER or SCISSORS! Good luck, muuuuahhahhahahahahahahhahaahahahha!", '');

  if (playGame) {
    let gameResult = play();
    console.log(gameResult);
    endGame();
  } else {
    open("./coward2.gif")
  }

}

// ELIF
const endGame = () => {


}

validActions = ["rock", "paper", "scissors"]




const computerSelection = computerPlay(validActions);
