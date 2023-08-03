
//Randomly selects a choice of rock, paper, or scissors for the computer opponent
function getComputerChoice() {
    choice = Math.floor(Math.random() * 3); //Generates a random integer between 0 and 2

    if(choice === 0) {
        return "rock";
    }
    else if(choice === 1) {
        return "paper";
    }
    else if(choice === 2) {
        return "scissors";
    }
    else {
        return;
    }
}

//Determines the winner of one round of the game and returns a string that indicates if the player won, lost, or tied
function playRound(playerSelection, computerSelection) {
    p = playerSelection.toLowerCase();

    if(p === computerSelection) {
        return "You both chose " + p + ". It's a tie.";
    }

    switch(computerSelection) {
        case "rock":
            if(p === "paper") {
                return "You win! Paper beats rock.";
            }
            else {
                return "You lose! Rock beats scissors.";
            }
        
        case "paper":
            if(p === "scissors") {
                return "You win! Scissors beats paper.";
            }
            else {
                return "You lose! Paper beats rock.";
            }

        case "scissors":
            if(p === "rock") {
                return "You win! Rock beats scissors.";
            }
            else {
                return "You lose! Scissors beats paper.";
            }

        default:
            return "You lose! " + playerSelection + " loses to " + computerSelection + ".";
    }
}

//Has the player play 5 rounds of the game and keeps score to report who won based on the best of 5
function game() {

}