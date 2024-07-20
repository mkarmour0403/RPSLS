let choices = {
    rock: { beats: ['scissors', 'lizard'] },
    paper: { beats: ['rock', 'spock'] },
    scissors: { beats: ['paper', 'lizard'] },
    lizard: { beats: ['spock', 'paper'] },
    spock: { beats: ['scissors', 'rock'] }
};

let playerChoices = {};

// Play background music when the page loads
window.onload = function() {
    let backgroundMusic = document.getElementById('background-music');
    backgroundMusic.play();
};

function makeChoice(player, choice) {
    playerChoices[player] = choice;

    let playerDiv = document.getElementById(`player${player}`);
    let choiceImages = playerDiv.querySelector('.choices');

    choiceImages.classList.add('hidden');

    let selectionDiv = document.getElementById(`player${player}-selection`);
    selectionDiv.innerHTML = `<p>Player ${player} has selected </p>`;

    if (playerChoices[1] && playerChoices[2]) {
        determineWinner();
    }
}

function determineWinner() {
    let player1Choice = playerChoices[1];
    let player2Choice = playerChoices[2];
    let resultDiv = document.getElementById('result');
    let winSound = document.getElementById('win-sound');
    let loseSound = document.getElementById('lose-sound');
    let tieSound = document.getElementById('tie-sound');

    if (player1Choice === player2Choice) {
        resultDiv.innerHTML = `<p>It's a tie! Both players chose ${player1Choice}.</p>`;
        tieSound.play();
    } else if (choices[player1Choice].beats.includes(player2Choice)) {
        resultDiv.innerHTML = `<p>Player 1 wins! ${player1Choice} beats ${player2Choice}.</p>`;
        winSound.play();
    } else {
        resultDiv.innerHTML = `<p>Player 2 wins! ${player2Choice} beats ${player1Choice}.</p>`;
        loseSound.play();
    }
    
    document.getElementById('play-again').style.display = 'inline-block';
}

function resetGame() {
    playerChoices = {};
    document.getElementById('result').innerHTML = '';
    document.getElementById('play-again').style.display = 'none';

    document.querySelectorAll('.choices').forEach(choices => {
        choices.classList.remove('hidden');
    });

    document.getElementById('player1-selection').innerHTML = '';
    document.getElementById('player2-selection').innerHTML = '';
}
