let validActions = ["rock", "paper", "scissors"];

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

const computerPlay = () => validActions[Math.floor(Math.random() * 3)];

// ANASTASIIA
const playRound = (playerSelection, computerSelection) => {
    playerSelection.toLowerCase();

    return "You Lose! Paper beats Rock";
};

// ANASTASIIA
const play = (playerSelection, computerSelection) => {
    let winner = "";
    for (let i = 0; i < 5; i++) {
        result = playRound(playerSelection, computerSelection);
        console.log(`Round ${i + 1}: ${result}`);
    }

    return winner;
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
const endGame = () => {};

const computerSelection = computerPlay();

game();

function userInput(text, placeholder = "") {
    let input = prompt(text, placeholder);
    if (input == null) {
        let exit = confirm("Do you wish to quite the game?");
        if (exit) {
            alert("Bye Bye");
            return quit();
        } else userInput(text, placeholder);
    } else return input;
}
function quit() {
    open("./coward.jpg", "_self");
    throw new Error("some error");
}
