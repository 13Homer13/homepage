import { updateBird, setupBird, getBirdRect } from "./bird.js"
import { updatePipes, setupPipes, getPassedPipesCount, getPipesRect } from "./pipe.js"

document.addEventListener("touchend", handleStart, {once: true});
document.addEventListener("keydown" , handleStart, {once: true});
const title = document.querySelector("[data-title]");
const subtitle = document.querySelector("[data-subtitle]");
const highScoreEl = document.querySelector("[data-high-score]");
const scoreEl = document.querySelector(".score");
let lastTime = null;
let audio = new Audio("./assets/sound.mp3");
let die = new Audio("./assets/die.mp3");
//Create time frame constance using loop
function updateLoop(time) {
    if (lastTime === null) {
        lastTime = time;
        window.requestAnimationFrame(updateLoop); // Sets frames and repeint page. Has to call itself making recursion.
        return
    }
    const delta = time - lastTime;
    updateBird(delta);
    updatePipes(delta);
    lastTime = time;
    scoreEl.innerHTML = `score: ${getPassedPipesCount()}`;
    if (checkLose()) {
        audio.pause();
        die.play();
        return handleLose();
    };
    window.requestAnimationFrame(updateLoop)
}
function checkLose() {
    const birdRect = getBirdRect();
    const insidePipe = getPipesRect().some( rect => isColission(birdRect, rect ));

    const outsideWorld = birdRect.top < 0 || birdRect.bottom > window.innerHeight;
    return outsideWorld || insidePipe;
}

function handleStart() {
    title.classList.add("hide");
    setupBird();
    setupPipes();
    lastTime = null;
    audio.currentTime = 0;
    audio.loop =true;
    audio.play();
    window.requestAnimationFrame(updateLoop)
}

function handleLose() {
    setTimeout( () => {
        title.classList.remove("hide");
        subtitle.classList.remove("hide");
        let highScore = getPassedPipesCount();
        highScoreEl.classList.remove("hide");
        if(highScore > getHighscore() ) {
            saveHighscore(highScore)
        }
        subtitle.innerHTML = `score: ${getPassedPipesCount()}`;
        highScoreEl.innerHTML = `High score: ${getHighscore()}`;
        document.addEventListener("touchstart", handleStart, {once: true});
        document.addEventListener("keydown" , handleStart, {once: true});
    },600)
}
function isColission(rect1, rect2) {
    return ( 
        rect1.left < rect2.right &&
        rect1.top < rect2.bottom &&
        rect1.right > rect2.left &&
        rect1.bottom > rect2.top
    )
}
function getHighscore() {
    return JSON.parse(localStorage.getItem("highScore") || 0);
  }
  
function saveHighscore(score) {
    localStorage.setItem("highScore", JSON.stringify(score));
  }



