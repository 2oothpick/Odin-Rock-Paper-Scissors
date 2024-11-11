function getComputerChoice() {
    /* Randomly returns 'rock', 'paper' or 'scissors'  */
    let result = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    return result == 1 ? 'rock' : result == 2 ? 'paper' : 'scissors';
}

function getHumanChoice() {
    /* Prompts and returns human's choice */
    let result = prompt('Choose between "rock", "paper" and "scissors":');
    return result.toLowerCase();
}

function playGame() {
    /* score */
    let humanScore = 0;
    let computerScore = 0;
    while (humanScore < 5 || computeScore < 5) {
        (function playRound(humanChoice, computerChoice) {
            humanChoice = getHumanChoice();
            computerChoice = getComputerChoice();
            console.log(humanChoice, computerChoice);
            if (humanChoice == computerChoice) {
                window.alert(
                    `Your Score: ${humanScore} Computer's Score: ${computerScore}\nDraw, nobody wins`,
                );
            } else if (humanChoice == 'rock' && computerChoice == 'paper') {
                computerScore++;
                window.alert(
                    `Your Score: ${humanScore} Computer's Score: ${computerScore}\nYou lose! Paper beats Rock.`,
                );
            } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
                humanScore++;
                window.alert(`Your Score: ${humanScore} Computer's Score: ${computerScore}\nYou Win! Rock beats Scissors.`);
            } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
                computerScore++;
                window.alert(`Your Score: ${humanScore} Computer's Score: ${computerScore}\nYou Lose! Scissors beats Paper.`);
            } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
                humanScore++;
                window.alert(`Your Score: ${humanScore} Computer's Score: ${computerScore}\nYou Win! Scissors beats Paper.`);
            } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
                computerScore++;
                window.alert(`Your Score: ${humanScore} Computer's Score: ${computerScore}\nYou Lose! Rock beats Scissors.`);
            } else if (humanChoice == 'paper' && computerChoice == 'rock') {
                humanScore++;
                window.alert(`Your Score: ${humanScore} Computer's Score: ${computerScore}\nYou Win! Paper beats Rock.`);
            } else {
                window.alert(`Check spelling: \n${humanChoice}`);
            }
        })();
    }
}

playGame()
