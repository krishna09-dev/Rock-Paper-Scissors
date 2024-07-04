let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lose: 0,
    draw: 0
};

updateScoreElement();

function gameLogic(userChoice) {
    const computerChoice = computerMove();

    if (userChoice === 'rock') {
        if (computerChoice === 'rock') {
            score.draw += 1;
        } else if (computerChoice === 'paper') {
            score.lose += 1;
        } else if (computerChoice === 'scissors') {
            score.win += 1;
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            score.win += 1;
        } else if (computerChoice === 'paper') {
            score.draw += 1;
        } else if (computerChoice === 'scissors') {
            score.lose += 1;
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            score.lose += 1;
        } else if (computerChoice === 'paper') {
            score.win += 1;
        } else if (computerChoice === 'scissors') {
            score.draw += 1;
        }
    }

    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();

    document.querySelector('.moves').innerHTML = `You <img src="image/${userChoice}.png" class="move-icon"> <img src="image/${computerChoice}.png" class="move-icon"> Computer`;
}

function computerMove() {
    const randomChoice = Math.random();
    if (randomChoice <= 1 / 3) {
        return 'rock';
    } else if (randomChoice > 1 / 3 && randomChoice <= 2 / 3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function updateScoreElement() {
    document.querySelector('.result').innerHTML = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.draw}`;
}

document.querySelector('.reset-score').addEventListener('click', function() {
    score = { win: 0, lose: 0, draw: 0 };
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.moves').innerHTML = '';
    updateScoreElement();
});
