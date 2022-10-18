// Rock Paper Scissors Game

"use strict"

let playerScore = 0;
let computerScore = 0;
const messageSymbol_span = document.getElementById("messageSymbol");
const playerScore_span = document.getElementById("playerScore");
const computerScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const message_p = document.querySelector(".message");
// const selectionButton = document.querySelectorAll('[data-selection]')
// const playerIcon_img = document.getElementById("playerIcon");
// const messageOperator_span = document.querySelector(".messageOperator");
const rock_btn = document.getElementById("rock");
const paper_btn = document.getElementById("paper");
const scissors_btn = document.getElementById("scissors");
const rockIcon_img = document.getElementById("rockHidden");
const paperIcon_img = document.getElementById("paperHidden");
const scissorsIcon_img = document.getElementById("scissorsHidden");
const rockIconComp_img = document.getElementById("rock-hidden-comp");
const paperIconComp_img = document.getElementById("paper-hidden-comp");
const scissorsIconComp_img = document.getElementById("scissors-hidden-comp");
const endGameModal = document.getElementById("endGameModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalMsg = document.getElementById("modal-msg");
const modalEmoji = document.getElementById("modalEmoji");


main();
choiceIcon();

// Generate random computer choice and icon

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        rockIconComp_img.classList.add('activeIcon');
    }
    else {
        rockIconComp_img.classList.remove('activeIcon');
    }
    if (randomNumber === 1) {
        paperIconComp_img.classList.add('activeIcon');
    }
    else {
        paperIconComp_img.classList.remove('activeIcon');
    }
    if (randomNumber === 2) {
        scissorsIconComp_img.classList.add('activeIcon');
    }
    else {
        scissorsIconComp_img.classList.remove('activeIcon');
    }
    return choices[randomNumber];
}

// Win round

function win(userChoice, computerChoice) {
    playerScore++;
    messageSymbol_span.innerHTML = '>';
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    message_p.innerHTML = `Winner winner chicken dinner! ${capitalizeFirstLetter(userChoice)} beats ${(computerChoice)}.`;
}

// Lose round

function lose(userChoice, computerChoice) {
    computerScore++;
    messageSymbol_span.innerHTML = '<';
    computerScore_span.innerHTML = computerScore;
    playerScore_span.innerHTML = playerScore;
    message_p.innerHTML = `Bummer, you lost! ${capitalizeFirstLetter(userChoice)} loses to ${(computerChoice)}.`;
}

// Tie round

function tie(userChoice, computerChoice) {
    messageSymbol_span.innerHTML = '=';
    message_p.innerHTML = `Would you look at that, it's a tie! ${capitalizeFirstLetter(userChoice)} equals ${(computerChoice)}.`;
}

// Capitalize first letter in message

function capitalizeFirstLetter(userChoice) {
    return userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
  }



// Change icon when user makes choice

function choiceIcon() {
    if (rockIcon_img.style.visibility = 'hidden') {
        rock_btn.addEventListener('click', ()=> {
            document.getElementById('rockHidden').style.visibility = 'visible';
        })
    } if (paperIcon_img.style.visibility = 'hidden') {
        paper_btn.addEventListener('click', ()=> {
            document.getElementById('paperHidden').style.visibility = 'visible';
        })
    } if (scissorsIcon_img.style.visibility = 'hidden') {
        scissors_btn.addEventListener('click', ()=> {
            document.getElementById('scissorsHidden').style.visibility = 'visible';
        })
    }
    return
}

// Game choice

function gameRound(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) { 
        case "rockscissors": // Player win conditions
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper": // Player lose conditions
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock": // Tie conditions
        case "paperpaper":
        case "scissorsscissors":
            tie(userChoice, computerChoice);
            break;
        //let some time pass before end game modal pops up
        //Update the game display and present reset button
    }
    isGameOver();
}

// End game modal and reset

function isGameOver() {
    if (playerScore === 5 || computerScore === 5) {
        openEndGameModal();
    }
}

// Modal message based on win or lose condition

function endGameMessage() {
    if (playerScore > computerScore) {
        modalMsg.innerHTML = "You won!";
        modalEmoji.innerHTML = "🥳";
    }
    else if (playerScore < computerScore) {
        modalMsg.innerHTML = "You lost...";
        modalMsg.style.fontSize = "28px";
        modalEmoji.innerHTML = "😥";
    }
  }

function openEndGameModal() {
    endGameMessage();
    endGameModal.classList.add('activeModal');
    modalOverlay.classList.add('activeModal');
}

// Reset game

function playAgain() {
    playerScore = 0;
    computerScore = 0;
    playerScore_span.innerText = "0";
    computerScore_span.innerText = "0";
    messageSymbol_span.innerText = "";
    rockIcon_img.style.visibility = "hidden";
    paperIcon_img.style.visibility = "hidden";
    scissorsIcon_img.style.visibility = "hidden";
    rockIconComp_img.classList.remove('activeIcon');
    paperIconComp_img.classList.remove('activeIcon');
    scissorsIconComp_img.classList.remove('activeIcon');
    message_p.innerHTML = "Let's play again! You know the rules, first to 5 wins! 🔥";
    endGameModal.classList.remove('activeModal');
    modalOverlay.classList.remove('activeModal');
}

// Game buttons for user to click

function main() {
    rock_btn.addEventListener('click', function() {
        gameRound('rock');
        // isGameOver();
        // choiceIcon('rock');
        //choiceIcon('rock','playerIcon');
        //choiceIcon(computerPick(),'computerIcon');
    })
    paper_btn.addEventListener('click', function() {
        gameRound('paper');
        // isGameOver();
    })
    scissors_btn.addEventListener('click', function() {
        gameRound('scissors');
        // isGameOver();
    })
}





