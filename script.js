let knowComputerActions = false;

const game = () => {
  playGame = confirm(
    "HELLO HUMAN!\n I am a bad AI that wants to dominate the world through the game of\n\nROCK x PAPER x SCISSORS\n Muuuuahhahhahahahahahahhahaahahahha! \n\n Can you beat me? \n ᕙ(⇀‸↼‶)ᕗ",
    ""
  );

  knowComputerActions = confirm("Do you want to know computer actions during the game?   ( ͡° ͜ʖ ͡°) ");

  if (playGame) {
    const { winner, playerVictories, computerVictories, tie, exit } = play();
    if (exit) {
      return quit();
    }
    const message = endGame(winner, playerVictories, computerVictories, tie);
    alert(message);
    if (confirm("Do you want to play with fate again? \n ( -_･) ︻デ═一' * (/❛o❛)/")) {
      game();
    } else {
      alert("Ciao Ciao!");
      return quit();
    }
  } else {
    let exit = confirm("Do you wish to quite the game? \n （（●´∧｀●））");
    if (exit) {
      alert("Bye Bye, COWARD!");
      return quit();
    } else play();
  }
};
const play = () => {
  let playerVictories = 0;
  let computerVictories = 0;
  let tie = 0;
  for (let i = 0; i < 5; i++) {
    const result = playRound();
    if (result.exit) {
      return { exit: true };
    }
    console.log(`Round ${i + 1}: ${result.message}`);

    if (result.winner === "player") {
      playerVictories++;
    } else if (result.winner === "computer") {
      computerVictories++;
    } else if (result.winner === "tie") {
      tie++;
    }
  }

  const winner =
    playerVictories > computerVictories
      ? "player"
      : computerVictories > playerVictories
      ? "computer"
      : "tie";

  return { winner, playerVictories, computerVictories, tie };
};

const validActions = ["rock", "paper", "scissors"];

const playRound = () => {
  const computerSelection = computerPlay();
  const playerSelection = playerPlay();
  if (playerSelection == "EXIT") {
    return { exit: true };
  }

  if (playerSelection === computerSelection) {
    return {
      message: `It's a tie! Both chose ${capitalize(playerSelection)}.`,
      winner: "tie",
    };
  }

  switch (playerSelection) {
    case "rock":
      if (computerSelection === "scissors") {
        return {
          message: `You Win! ${capitalize(playerSelection)} beats ${capitalize(
            computerSelection
          )}.`,
          winner: "player",
        };
      } else {
        return {
          message: `You Lose! ${capitalize(
            computerSelection
          )} beats ${capitalize(playerSelection)}.`,
          winner: "computer",
        };
      }

    case "paper":
      if (computerSelection === "rock") {
        return {
          message: `You Win! ${capitalize(playerSelection)} beats ${capitalize(
            computerSelection
          )}.`,
          winner: "player",
        };
      } else {
        return {
          message: `You Lose! ${capitalize(
            computerSelection
          )} beats ${capitalize(playerSelection)}.`,
          winner: "computer",
        };
      }

    case "scissors":
      if (computerSelection === "paper") {
        return {
          message: `You Win! ${capitalize(playerSelection)} beats ${capitalize(
            computerSelection
          )}.`,
          winner: "player",
        };
      } else {
        return {
          message: `You Lose! ${capitalize(
            computerSelection
          )} beats ${capitalize(playerSelection)}.`,
          winner: "computer",
        };
      }

    default:
      return {
        message: "Invalid weapon! Choose rock, paper, or scissors. \n ƪ(“╰ _ ╯ )ʃ",
        winner: null,
      };
  }
};
const playerPlay = () => {
  const regex = /^[a-zA-Z]+$/;
  let input = userInput(
    "Choose your weapon!\n-> Rock\n-> Paper\n-> Scissors \n (ง ͠ ᵒ̌ Дᵒ̌ )▬▬ι══════>",
    ""
  );
  if (input == "EXIT") {
    return "EXIT";
  }

  if (!regex.test(input)) {
    alert("???\nSorry I don't understand that.\nTry again! \n ƪ(“╰ _ ╯ )ʃ");
    return playerPlay();
  }
  const playerAction = input.toLocaleLowerCase();

  return validActions.includes(playerAction)
    ? playerAction
    : (alert("That weapon is not valid in this game! Try again! \n ƪ(“╰ _ ╯ )ʃ"),
      playerPlay());
};

const computerPlay = () => {
  const computerAction = validActions[Math.floor(Math.random() * 3)];
  if (knowComputerActions) console.log(`Computer chose: ${computerAction}`);
  return computerAction;
};

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1); // Helper function to capitalize the first letter of a string

const endGame = function (winner, playerVictories, computerVictories) {
  switch (winner) {
    case "player":
      return `Contratulations, You won!\n\n Player ${playerVictories} - ${computerVictories} Computer `;

    case "computer":
      return `You lost!\n\nOh Poor guy such a shame on you!\n\nPlayer ${playerVictories} - ${computerVictories} Computer `;

    case "tie":
      return `It's a Tie!\n\n\n\nPlayer ${playerVictories} - ${computerVictories} Computer \n ✧( ु•⌄• )◞🍝🍝◟( •⌄• )✧`;
  }
};

function userInput(text, placeholder = "") {
  let input = prompt(text, placeholder);
  if (input == null) {
    let exit = confirm("Do you wish to quite the game? \n （（●´∧｀●））");
    if (exit) {
      alert("Bye Bye");
      return "EXIT";
    } else return userInput(text, placeholder);
  } else return input;
}
function quit() {
  console.log("quit ଵ ˛̼ ଵ");
  return open("./coward.gif", "_self");
}

game();
