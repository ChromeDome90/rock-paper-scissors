// Rock Paper Scissors Game

let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("playerScore");
const computerScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const message_p = document.querySelector(".message");
let playerIcon_img = document.getElementById("playerIcon");
let computerIcon_img = document.getElementById("computerIcon");
const messageOperator_span = document.querySelector(".messageOperator");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


main();

// Generate random computer choice

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
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

function capitalizeFirstLetter(userChoice, computerChoice) {
    return userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
  }

// Game choice 

function game(userChoice) {
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
    }
}

function iconSelect(userChoice, computerChoice){
    switch(userChoice) {
        case "rock":
            return playerIcon_img.src = "images/rock.svg"
            break;
    }
}

// Game buttons for user to click

function main() {
    rock_div.addEventListener('click', function() {
        game("rock");
        iconSelect();
    })

    paper_div.addEventListener('click', function() {
        game("paper");
    })

    scissors_div.addEventListener('click', function() {
        game("scissors");
    })
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}
