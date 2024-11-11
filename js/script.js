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

/* score */
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log(humanChoice, computerChoice)
    if (humanChoice == computerChoice) {
        return 'Draw, nobody wins';
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        computerScore++;
        return 'You lose! Paper beats Rock.';
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        humanScore++;
        return 'You Win! Rock beats Scissors.';
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        computerScore++;
        return 'You Lose! Scissors beats Paper.';
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        humanScore++;
        return 'You Win! Scissors beats Paper.';
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        computerScore++;
        return 'You Lose! Rock beats Scissors.';
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore++;
        return 'You Win! Paper beats Rock.';
    } else {
        console.log('Check spelling')
    }
}

