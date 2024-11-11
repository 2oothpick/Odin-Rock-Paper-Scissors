function getComputerChoice() {
    /* Randomly returns 'rock', 'paper' or 'scissors'  */
    let result = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    return result == 1 ? 'rock' : result == 2 ? 'paper' : 'scissors';
}

