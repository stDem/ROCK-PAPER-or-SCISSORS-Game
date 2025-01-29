const validActions = ["rock", "paper", "scissors"];

const playerPlay = () => {
    let input = userInput(
        "Choose your weapon!\n-> Rock\n-> Paper\n-> Scissors",
        ""
    );

    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(input)) {
        alert("???\nSorry I don't understand that.\nTry again!");
        return playerPlay();
    }
    action = input.toLocaleLowerCase();

    return validActions.includes(action)
        ? action
        : (alert("That weapon is not valid in this game! Try again!"),
          playerPlay());
};

const computerPlay = () => {
  const randomAction = validActions[Math.floor(Math.random() * 3)];
  console.log(`Computer chose: ${randomAction}`);
  return randomAction;
};

// ANASTASIIA
const playRound = (playerSelection, computerSelection) => {
  
  if (playerSelection === computerSelection) {
    return {
      message: `It's a tie! Both chose ${capitalize(playerSelection)}.`,
      winner: "tie"
    };
  }

  // Determine the winner using switch
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "scissors") {
        return {
          message: `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`,
          winner: "player"
        };
      } else {
        return {
          message: `You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`,
          winner: "computer"
        };
      }

    case "paper":
      if (computerSelection === "rock") {
        return {
          message: `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`,
          winner: "player"
        };
      } else {
        return {
          message: `You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`,
          winner: "computer"
        };
      }

    case "scissors":
      if (computerSelection === "paper") {
        return {
          message: `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`,
          winner: "player"
        };
      } else {
        return {
          message: `You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`,
          winner: "computer"
        };
      }

    default:
      return {
        message: "Invalid weapon! Choose rock, paper, or scissors.",
        winner: null
      };
  }
};


const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1); // Helper function to capitalize the first letter of a string

// ANASTASIIA
const play = (playerSelection, computerSelection) => {
    let winner = "";
    let playerWins = 0;
    let computerWins = 0;
    let tie = 0;
    for (let i = 0; i < 5; i++) {
        const result = playRound(playerSelection, computerSelection);
        console.log(`Round ${i + 1}: ${result.message}`);
    }

    if (result.winner === "player") {
      playerWins++;
    } else if (result.winner === "computer") {
      computerWins++;
    } else if (result.winner === "tie") {
        tie++;
    }

    // Determine the overall winner
    if (playerWins > computerWins) {
    winner = "player";
    } else if (computerWins > playerWins) {
    winner = "computer";
    } else {
    winner = "tie";
    }
  
  return { winner, playerWins, computerWins, tie }; 
};

// STEF
const game = () => {
    playGame = confirm(
        "HELLO HUMAN!\n I am a bad AI that wants to dominate the world through the game of\n\nROCK x PAPER x SCISSORS\n Muuuuahhahhahahahahahahhahaahahahha! \n\n Can you beat me?",
        ""
    );

    if (playGame) {
        let computer = computerPlay();
        console.log(`${playerPlay()} vs. ${computer}`);
        // let gameResult = play();
        // console.log(gameResult);
        // endGame();
    } else {
        open("./coward.gif", "_self");
    }
};

// ELIF
const endGame = function ( winner,playerWins,computerWins) {
    
    return winner
        ? `Contratulations, You won!\n\n Player ${playerWins} - ${computerWins} Computer `
        : `You lost!\n\nOh Poor guy such a shame on you!\n\n Player ${playerWins} - ${computerWins} Computer `;
};


const computerSelection = computerPlay();

game();

function userInput(text, placeholder = "") {
    let input = prompt(text, placeholder);
    if (input == null) {
        let exit = confirm("Do you wish to quite the game?");
        if (exit) {
            alert("Bye Bye");
            return quit();
        } else
          return userInput(text, placeholder);
    } else return input;
}
function quit() {
    open("./coward.jpg", "_self");
    throw new Error("some error");
}
