
//Randomly selects a choice of rock, paper, or scissors for the computer opponent
function getComputerChoice() {
    choice = Math.floor(Math.random() * 3); //Generates a random integer between 0 and 2

    if(choice === 0) {
        return "Rock";
    }
    else if(choice === 1) {
        return "Paper";
    }
    else {
        return "Scissors"
    }
}

//Determines the winner of one round of the game and returns a string that indicates if the player won, lost, or tied
function playRound(playerSelection, computerSelection) {

}

//Has the player play 5 rounds of the game and keeps score to report who won based on the best of 5
function game() {

}