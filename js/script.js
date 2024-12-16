function getComputerChoice() {
  /* Randomly returns 'rock', 'paper' or 'scissors'  */
  const MAX = 3;
  const MIN = 1;
  const result = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

  const ROCK = 1;
  const PAPER = 2;
  return result === ROCK ? 'rock' : result === PAPER ? 'paper' : 'scissors';
}

let humanChoice = '';

function playGame() {
  /* Loops playRound for 5 rounds */
  /* score */
  console.log('started');
  const guestScore = document.querySelector('.guest_score');
  let humanScore = Number(guestScore.textContent);
  const pcScore = document.querySelector('.pc_score');
  let computerScore = Number(pcScore.textContent);

  function playRound(humanChoice) {
    /* Runs a single round */
    //humanChoice = getHumanChoice();
    console.log(humanChoice);
    let computerChoice = getComputerChoice();
    console.log(humanChoice, computerChoice);
    if (humanChoice === computerChoice) {
      window.alert(
        `Your Score: ${humanScore} Computer's Score: ${computerScore}\nDraw, nobody wins`,
      );
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
      computerScore++;
      pcScore.textContent = computerScore;
      window.alert(
        `Your Score: ${humanScore} Computer's Score: ${computerScore}\nYou lose! Paper beats Rock.`,
      );
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
      humanScore++;
      guestScore.textContent = humanScore;
      window.alert(
        `Your Score: ${humanScore} Computer's Score: ${computerScore}\nYou Win! Rock beats Scissors.`,
      );
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
      computerScore++;
      pcScore.textContent = computerScore;
      window.alert(
        `Your Score: ${humanScore} Computer's Score: ${computerScore}\nYou Lose! Scissors beats Paper.`,
      );
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
      humanScore++;
      guestScore.textContent = humanScore;
      window.alert(
        `Your Score: ${humanScore} Computer's Score: ${computerScore}\nYou Win! Scissors beats Paper.`,
      );
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
      computerScore++;
      pcScore.textContent = computerScore;
      window.alert(
        `Your Score: ${humanScore} Computer's Score: ${computerScore}\nYou Lose! Rock beats Scissors.`,
      );
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
      humanScore++;
      guestScore.textContent = humanScore;
      window.alert(
        `Your Score: ${humanScore} Computer's Score: ${computerScore}\nYou Win! Paper beats Rock.`,
      );
    } 
    if (humanScore === 5){
      window.alert('Congratulations! You won the game!')
    } else if(computerScore === 5){
      window.alert('Game over! The computer won.')
    }

  }
  // human inputs
  // rock
  const rock = document.querySelector('.rock_btn');
  rock.addEventListener('click', () => {
    if (humanScore < 5 && computerScore < 5) {
      playRound('rock');
    }
  });

  // paper
  const paper = document.querySelector('.paper_btn');
  paper.addEventListener('click', () => {
    if (humanScore < 5 && computerScore < 5) {
      playRound('paper');
    }
  });

  // scissors
  const scs = document.querySelector('.scissors_btn');
  scs.addEventListener('click', () => {
    if (humanScore < 5 && computerScore < 5) {
      playRound('scissors');
    }
  });
}

//start game
const start_btn = document.querySelector('button.start');

start_btn.addEventListener('click', () => {
  document.querySelector('.guest_score').textContent = '0';
  document.querySelector('.pc_score').textContent = '0';
  playGame();
});
