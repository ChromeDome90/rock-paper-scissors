// Rock Paper Scissors Game

let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("playerScore");
const computerScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const message_p = document.querySelector(".message");
const playerIcon_img = document.getElementById("playerIcon");
const computerIcon_img = document.getElementById("computerIcon");
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

function win() {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
}

function lose() {
}

function tie() {
    console.log("TIE!");
}

// Player choice 

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) { 
        case "rockscissors": // Player win conditions
        case "paperrock":
        case "scissorspaper":
            win();
            break;
        case "rockpaper": // Player lose conditions
        case "paperscissors":
        case "scissorsrock":
            lose();
            break;
        case "rockrock": // Tie conditions
        case "paperpaper":
        case "scissorsscissors":
            tie();
            break;
    }
}

// Game buttons for user to choose/click

function main() {
    rock_div.addEventListener('click', function() {
        game("rock");
    })

    paper_div.addEventListener('click', function() {
        game("paper");;
    })

    scissors_div.addEventListener('click', function() {
        game("scissors");;
    })
}
