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

/* score */

const guestScore = document.querySelector('.guest_score');
const pcScore = document.querySelector('.pc_score');
const round= document.querySelector('.round')

function playGame() {
  let humanScore = Number(guestScore.textContent);
  let computerScore = Number(pcScore.textContent);
  const info = document.querySelector('.info');
  info.textContent = 'Started';
  let counter = 0
  function playRound(humanChoice) {
    /* Runs a single round */
    counter++
    round.textContent = `round: ${counter}`
    let computerChoice = getComputerChoice();
    console.log(computerChoice, humanChoice);
    if (humanChoice === computerChoice) {
      pcScore.textContent = `${computerScore}`;
      guestScore.textContent = `${humanScore}`;
      info.textContent = 'Draw, nobody wins';
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
      computerScore += 1;
      pcScore.textContent = `${computerScore}`;
      guestScore.textContent = `${humanScore}`;
      info.textContent = 'You lose! Paper beats Rock';
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
      humanScore += 1;
      pcScore.textContent = `${computerScore}`;
      guestScore.textContent = `${humanScore}`;
      info.textContent = 'You Win! Rock beats Scissors';
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
      computerScore += 1;
      pcScore.textContent = `${computerScore}`;
      guestScore.textContent = `${humanScore}`;
      info.textContent = 'You Lose! Scissors beats Paper';
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
      humanScore += 1;
      pcScore.textContent = `${computerScore}`;
      guestScore.textContent = `${humanScore}`;
      info.textContent = 'You Win! Scissors beats Paper';
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
      computerScore += 1;
      pcScore.textContent = `${computerScore}`;
      guestScore.textContent = `${humanScore}`;
      info.textContent = 'You Lose! Rock beats Scissors';
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
      humanScore += 1;
      pcScore.textContent = `${computerScore}`;
      guestScore.textContent = `${humanScore}`;
      info.textContent = 'You Win! Paper beats Rock';
    }
    if (guestScore.textContent === '5') {
      info.textContent = 'Congratulations! You won the game!';
    } else if (pcScore.textContent === '5') {
      info.textContent = 'Game over! The computer won.';
    }
    console.log(humanScore, computerScore);
  }
  // human inputs
  // rock
  const rock = document.querySelector('.rock_btn');
  rock.addEventListener('click', () => {
    if (humanScore < 5 && computerScore < 5) {
      console.log(humanScore, computerScore);
      playRound('rock');
    }
  });

  // paper
  const paper = document.querySelector('.paper_btn');
  paper.addEventListener('click', () => {
    if (humanScore < 5 && computerScore < 5) {
      console.log(humanScore, computerScore);
      playRound('paper');
    }
  });

  // scissors
  const scs = document.querySelector('.scissors_btn');
  scs.addEventListener('click', () => {
    if (humanScore < 5 && computerScore < 5) {
      console.log(humanScore, computerScore);
      playRound('scissors');
    }
  });
}

//start game
const start_btn = document.querySelector('button.start');

start_btn.addEventListener('click', () => {
  document.querySelector('.guest_score').textContent = '0';
  document.querySelector('.pc_score').textContent = '0';
  document.querySelector('.round').textContent = 'round: 0'
  playGame();
});
