function getComputerChoice () {
  /* Randomly returns 'rock', 'paper' or 'scissors'  */
  const MAX = 3;
  const MIN = 1;
  const result = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  
  const ROCK = 1;
  const PAPER = 2;
  return result === ROCK ? 'rock' : result === PAPER ? 'paper' : 'scissors';
}

function getHumanChoice () {
  /* Prompts for and returns human's choice */
  const result = prompt('Choose between "rock", "paper" and "scissors":');
  return result.toLowerCase();
}

function playGame () {
  /* Loops playRound for 5 rounds */
  /* score */
  let humanScore = 0;
  let computerScore = 0;
  while ((humanScore < 5) && (computerScore < 5)) {
    (function playRound (humanChoice, computerChoice) {
      /* Runs a single round */
      humanChoice = getHumanChoice();
      computerChoice = getComputerChoice();
      console.log(humanChoice, computerChoice);
      if (humanChoice === computerChoice) {
        window.alert(
                    `Your Score: ${humanScore} Computer's Score: ${computerScore}\nDraw, nobody wins`
        );
      } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        window.alert(
                    `Your Score: ${humanScore} Computer's Score: ${computerScore}\nYou lose! Paper beats Rock.`
        );
      } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        window.alert(
                    `Your Score: ${humanScore} Computer's Score: ${computerScore}\nYou Win! Rock beats Scissors.`
        );
      } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        window.alert(
                    `Your Score: ${humanScore} Computer's Score: ${computerScore}\nYou Lose! Scissors beats Paper.`
        );
      } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        window.alert(
                    `Your Score: ${humanScore} Computer's Score: ${computerScore}\nYou Win! Scissors beats Paper.`
        );
      } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        window.alert(
                    `Your Score: ${humanScore} Computer's Score: ${computerScore}\nYou Lose! Rock beats Scissors.`
        );
      } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        window.alert(
                    `Your Score: ${humanScore} Computer's Score: ${computerScore}\nYou Win! Paper beats Rock.`
        );
      } else {
        window.alert(`Check spelling: \n${humanChoice}`);
      }
    })();
  }
}

playGame();
