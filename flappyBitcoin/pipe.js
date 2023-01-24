const HOLE_HIGHT = 150;
const PIPE_WIDTH = 50;
let PIPE_INTERVAL = 2100;
let PIPE_SPEED = 0.2;
let timeSinceLastPipe;
let pipes = [];
let passedPipesCount; 

export function setupPipes() {
 /*    document.documentElement.style.setProperty("--pipe-width", PIPE_WIDTH );
    document.documentElement.style.setProperty("--hole-height", HOLE_HIGHT ); */
    timeSinceLastPipe = PIPE_INTERVAL;
    passedPipesCount = 0;
    PIPE_SPEED = 0.2;
    PIPE_INTERVAL = 2100;
    pipes.forEach(p => p.remove())
}


export function updatePipes(delta) {
    timeSinceLastPipe += delta;

    if (timeSinceLastPipe > PIPE_INTERVAL) {
        timeSinceLastPipe -= PIPE_INTERVAL
        createPipe()
    }
    pipes.forEach( pipe => {
        if (pipe.left + PIPE_WIDTH < 0) {
            passedPipesCount++
             pipe.remove()
        }
         if (passedPipesCount >= 20) {
            PIPE_SPEED = 0.23;
        }
        if (passedPipesCount >= 40) {
            PIPE_SPEED = 0.26;
        }
        if (passedPipesCount >= 60) {
            PIPE_SPEED = 0.3;
        }
        pipe.left -= delta * PIPE_SPEED
    }) 
}

export function getPassedPipesCount() {
    return passedPipesCount
}
export function getPipesRect() {
    return pipes.flatMap(pipe => pipe.rects())
}

function createPipe() {
    const pipeEl = document.createElement("div");
    const topEl = createPipeSegment("top");//check if yoou can make onliner?
    const bottomEl = createPipeSegment("bottom");
    pipeEl.appendChild(topEl);
    pipeEl.appendChild(bottomEl);
    pipeEl.classList.add("pipe");
    pipeEl.style.setProperty("--hole-top", randomNumberBetween(HOLE_HIGHT * 1.5, window.innerHeight - HOLE_HIGHT * 0.5));
    const pipe = {
        get left() {
            return parseFloat(getComputedStyle(pipeEl).getPropertyValue("--pipe-left"))
        },
        set left(val) {
            pipeEl.style.setProperty("--pipe-left", val)
        },
        remove() {
            pipes = pipes.filter( p => p !== pipe);
            pipeEl.remove()
        },
        rects() {
            return [
                topEl.getBoundingClientRect(),
                bottomEl.getBoundingClientRect()
            ]
        }
       
    }
    pipe.left = window.innerWidth;
    document.body.append(pipeEl);
    pipes.push(pipe);
}

function createPipeSegment(position) {
    const segment = document.createElement("div");
    segment.classList.add("segment", position)
    return segment
}

function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min )
}
