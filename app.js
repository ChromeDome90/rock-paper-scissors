// Rock Paper Scissors Game

let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("playerScore");
const computerScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const message_p = document.querySelector(".message");
// const selectionButton = document.querySelectorAll('[data-selection]')
// const playerIcon_img = document.getElementById("playerIcon");
// const computerIcon_img = document.getElementById("computerIcon");
const messageOperator_span = document.querySelector(".messageOperator");
const rock_btn = document.getElementById("rock");
const paper_btn = document.getElementById("paper");
const scissors_btn = document.getElementById("scissors");





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

function capitalizeFirstLetter(userChoice) {
    return userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
  }

// Change icon when user/computer makes choice




  //function choiceIcon(choiceText, elementID){
    //switch(choiceText){
        //case: 'rock':
            //let img = document.createElement('img');
            //img.src = "images/rock.svg";
            //let src = document.getElementById(elementID);
    //}

//   function choiceIcon(userChoice, computerChoice) {
//       switch (userChoice) {
//         case 'rock':
//             let img = document.createElement('img');
//             img.src = "images/rock.svg";
//             let src = document.getElementById('playerIcon');
//             src.appendChild(img);
//             break;
//         case 'paper':
//             let imgP = document.createElement('img');
//             img.src = "images/paper.svg";
//             let srcP = document.getElementById('playerIcon');
//             srcP.appendChild(imgP);
//       }
//   }


//update the icons for computer and player
const rockIcon_img = document.querySelector("rockHidden");
const paperIcon_img = document.getElementById("paperHidden");
const scissorsIcon_img = document.getElementById("scissorsHidden");


function active() {
    if(document.getElementById("rockHidden").classList.contains("active")) {
        document.getElementById("rockHidden").classList.remove("active");}
          
    // if(document.getElementById("paperHidden").classList.contains("active")) {
    //     document.getElementsById("rockHidden").classList.remove("active")
    //     ;}
           
}


active();






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

main();



