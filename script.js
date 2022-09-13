let level = 0;
let cpuSequence = [];
let humanSequence = [];
let score = 0;


const startButton = document.querySelector('.start');
const redTile = document.querySelector('.color-red');
const blueTile = document.querySelector('.color-blue');
const yellowTile = document.querySelector('.color-yellow');
const greenTile = document.querySelector('.color-green');
const scoreEl = document.querySelector('.score');
const level = document.querys


function chosenColor() {
    const colors = ['red', 'yellow', 'blue', 'green'];
    const random = colors[Math.floor(Math.random() * colors.length)];
    
    return random;
}

function nextRound() {
    level += 1;

    
    cpuSequence.push(chosenColor());
    showSequence(cpuSequence);
    console.log(cpuSequence)
}

function startGame() {
    startButton.classList.add('remove');
    alert('Wait for the sequence then repeat it!')
    nextRound();
}

startButton.addEventListener('click', startGame);

function litColor(color) {
    const colorEL = document.querySelector(`[data-color='${color}']`);
    
    colorEL.classList.add('lit');
    
    setTimeout(function() {
        colorEL.classList.remove('lit');
    }, 800);
}

function showSequence(nextSequence) {
    nextSequence.forEach(function(color, index) {
        setTimeout(function() {
            litColor(color);
        }, (index + 1) * 1000);
    });
}

redTile.addEventListener('click', function() {
    humanSequence.push('red');
    console.log(humanSequence);
    if (compare()) {
        score++
        scoreEl.innerText = score;
        humanSequence = [];
    }
});
blueTile.addEventListener('click', function () {
	humanSequence.push('blue');
    console.log(humanSequence);
	if (compare()) {
		score++;
		scoreEl.innerText = score;
		humanSequence = [];
	}
});
greenTile.addEventListener('click', function () {
	humanSequence.push('green');
    console.log(humanSequence);
	if (compare()) {
		score++;
		scoreEl.innerText = score;
		humanSequence = [];
	}
});
yellowTile.addEventListener('click', function () {
	humanSequence.push('yellow');
    console.log(humanSequence);
	if (compare()) {
		score++;
		scoreEl.innerText = score;
		humanSequence = [];
	}
});

function compare() {
    if (humanSequence.length == cpuSequence.length) {
        for (let i = 0; i < humanSequence.length; i++) {
            if (humanSequence[i] !== cpuSequence[i]) {
                return false;
            }
        }
        alert('Congrats, onto the next round')
        return true
    }
    return false
}
