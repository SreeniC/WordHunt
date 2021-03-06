window.addEventListener('load',init);

const levels = {
    easy:5,
    medium:3,
    hard:2
}

const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentword = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = ['test','revolver','echo','runway','joke','space','lucky','brick','play','hunt','beat'];

function init(){
    seconds.innerHTML = currentLevel;
    showWord(words);
    wordInput.addEventListener('input',startMatch);
    setInterval(countDown,1000);
    setInterval(checkStatus,50);
    
}

function showWord(words){
 const randIndex = Math.floor(Math.random() * words.length);
 currentword.innerHTML = words[randIndex];
}

function countDown(){
    if (time>0) {
        time--;
    }
    else if(time===0){
        isPlaying = false;
    }
   timeDisplay.innerHTML = time;
}

function checkStatus(){
    if (!isPlaying && time===0) {
        message.innerHTML = "Game Over!!";
        score = -1;
    }
}

function startMatch(){
    if (matchWords()) {
        isPlaying=true;
        time=currentLevel + 1;
        showWord(words);
        wordInput.value ='';
        score++;
    }
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

function matchWords(){
    if (wordInput.value===currentword.innerHTML) {
        message.innerHTML='Correct!!';
        return true;
    }
    else
    {
        message.innerHTML = '';
        return false;
    }
}
