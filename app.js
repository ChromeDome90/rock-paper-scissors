// Rock Paper Scissors Game

let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("playerScore");
const computerScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const message_p = document.querySelector(".message");
// const selectionButton = document.querySelectorAll('[data-selection]')
// const playerIcon_img = document.getElementById("playerIcon");
const messageOperator_span = document.querySelector(".messageOperator");
const rock_btn = document.getElementById("rock");
const paper_btn = document.getElementById("paper");
const scissors_btn = document.getElementById("scissors");

main();
choiceIcon();

// Generate random computer choice and icon

function getComputerChoice() {
    const rockIconComp_img = document.getElementById("rockHidden");
    const paperIconComp_img = document.getElementById("paperHidden");
    const scissorsIconComp_img = document.getElementById("scissorsHidden");
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0 && rockIconComp_img.style.visibility === 'hidden') {
        document.getElementById('rock-hidden-comp').style.visibility = 'visible';
    }
    else if (randomNumber === 1 || randomNumber === 2 && paperIconComp_img.style.visibility === 'hidden' || scissorsIconComp_img.style.visibility === 'hidden') {
        document.getElementById('rock-hidden-comp').style.visibility = 'hidden';
    }
    if (randomNumber === 1 && paperIconComp_img.style.visibility === 'hidden') {
        document.getElementById('paper-hidden-comp').style.visibility = 'visible';
    }
    else if (randomNumber === 0 || randomNumber === 2 && rockIconComp_img.style.visibility === 'hidden' || scissorsIconComp_img.style.visibility === 'hidden') {
        document.getElementById('paper-hidden-comp').style.visibility = 'hidden';
    }
    if (randomNumber === 2 && scissorsIconComp_img.style.visibility === 'hidden') {
        document.getElementById('scissors-hidden-comp').style.visibility = 'visible';
    } 
    else if (randomNumber === 0 || randomNumber === 1 && rockIconComp_img.style.visibility === 'hidden' || paperIconComp_img.style.visibility === 'hidden') {
        document.getElementById('scissors-hidden-comp').style.visibility = 'hidden';
    }
    return choices[randomNumber];
}

// Win round

function win(userChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    message_p.innerHTML = `Winner winner chicken dinner! ${capitalizeFirstLetter(userChoice)} beats ${(computerChoice)}.`;
}

// Lose round

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    playerScore_span.innerHTML = playerScore;
    message_p.innerHTML = `Bummer, you lost! ${capitalizeFirstLetter(userChoice)} loses to ${(computerChoice)}.`;
}

// Tie round

function tie(userChoice, computerChoice) {
    message_p.innerHTML = `Would you look at that, it's a tie! ${capitalizeFirstLetter(userChoice)} equals ${(computerChoice)}.`;
}

// Capitalize first letter in message

function capitalizeFirstLetter(userChoice) {
    return userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
  }

// Change icon when user makes choice

function choiceIcon() {
    const rockIcon_img = document.getElementById("rockHidden");
    const paperIcon_img = document.getElementById("paperHidden");
    const scissorsIcon_img = document.getElementById("scissorsHidden");

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
}

// Game buttons for user to click

function main() {
    rock_btn.addEventListener('click', function() {
        gameRound('rock');
        // choiceIcon('rock');
        //choiceIcon('rock','playerIcon');
        //choiceIcon(computerPick(),'computerIcon');
    })
    paper_btn.addEventListener('click', function() {
        gameRound('paper');
    })
    scissors_btn.addEventListener('click', function() {
        gameRound('scissors');
    })
}





