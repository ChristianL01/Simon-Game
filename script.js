let level = 0;
let cpuSequence = [];
let humanSequence = [];


const startButton = document.querySelector('.start');
const redTile = document.querySelector('.color-red');
const blueTile = document.querySelector('.color-blue');
const yellowTile = document.querySelector('.color-yellow');
const greenTile = document.querySelector('.color-yellow');


function startGame() {
    startButton.classList.add('remove');
    window.alert('Wait for the sequence then repeat it!')
}
startButton.addEventListener('click', startGame)

function currentSequence() {
    const colors = ['red', 'yellow', 'blue', 'green'];
    const random = colors[Math.floor(Math.random() * colors.length)];

    return random
}
console.log(currentSequence())