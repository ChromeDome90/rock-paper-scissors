// Rock Paper Scissors Game

const playerScore = 0;
const computerScore = 0;
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

rock_div.addEventListener('click', function() {
    console.log("You clicked on rock!");
})

paper_div.addEventListener('click', function() {
    console.log("You clicked on paper!");
})

scissors_div.addEventListener('click', function() {
    console.log("You clicked on scissors!");
})