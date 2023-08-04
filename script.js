
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
        return "0You both chose " + p + ". It's a tie.";
    }

    switch(p) {
        case "rock":
            if(computerSelection === "paper") {
                return "2You lose! Rock loses to paper.";
            }
            else {
                return "1You win! Rock beats scissors.";
            }
        
        case "paper":
            if(computerSelection === "scissors") {
                return "2You lose! Paper loses to scissors.";
            }
            else {
                return "1You win! Paper beats rock.";
            }

        case "scissors":
            if(computerSelection === "rock") {
                return "2You lose! Scissors loses to rock.";
            }
            else {
                return "1You win! Scissors beats paper.";
            }

        default:
            return "2You lose! " + playerSelection + " loses to " + computerSelection + ".";
    }
}

//Has the player play 5 rounds of the game and keeps score to report who won based on the best of 5
function game() {
    let results = [0, 0, 0];

    for(let i = 0; i < 5; i++) {
        message = playRound(prompt("Rock? Paper? Scissors?"), getComputerChoice());
        
        console.log(message.slice(1));

        switch(message.slice(0,1)) {
            case "0":
                results[0] = (results[0] + 1);
                break;
            
            case "1":
                results[1] = (results[1] + 1);
                break;

            case "2":
                results[2] = (results[2] + 1);
                break;

            default:
                break;
        }
    }

    if(results[1] < results[2]) {
        console.log("Overall, you lose! Record [tie, win, loss]: " + results);
    }
    else if(results[1] === results[2]) {
        console.log("Overall, you tie! Record [tie, win, loss]: " + results);
    }
    else {
        console.log("Overall, you win! Record [tie, win, loss]: " + results);
    }
}

game()