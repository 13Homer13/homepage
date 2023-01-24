const birdEl = document.querySelector("[data-bird]");
const BIRD_SPEED = 0.19;
let timeSinceLastJump = Number.POSITIVE_INFINITY; //just takes big number
const JUMP_DURATION = 200;
let tapedTwice = false;


export function setupBird() {
    setTop(window.innerHeight / 2);
    document.removeEventListener("touchstart", tapHandler, { passive: false });
    document.removeEventListener("keydown", keyHandler, { passive: false });
    document.addEventListener("touchstart", tapHandler, { passive: false });
    document.addEventListener("keydown", keyHandler, { passive: false });
}

export function updateBird(delta) {
    if (timeSinceLastJump < JUMP_DURATION) {
      setTop(getTop() - BIRD_SPEED * delta)
    } else {
      setTop(getTop() + BIRD_SPEED * delta)
    }
  
    timeSinceLastJump += delta
  }

export function getBirdRect() {
    return birdEl.getBoundingClientRect(); // takes Elemnt and returns inset values (top,right,bottom,left)
}
function setTop(top) {
    birdEl.style.setProperty("--bird-top", top );
}
export function getTop() {
    return parseFloat(getComputedStyle(birdEl).getPropertyValue("--bird-top")); //getComputed returns object of all CSS prope then getPropertyValue choose one of them.
}
function handleJump(e) {
    //if (e.code !== "Space") return //code gives type of key from event object
    
  }
function keyHandler(event) {
  if (!tapedTwice) {
      tapedTwice = true;
      return false;
  }
  event.preventDefault(); // Prevent Page Zoom.
  if (event.keyCode === 32) {
    timeSinceLastJump = 0
  }
}

function tapHandler(event) {
  if (!tapedTwice) {
      tapedTwice = true;
      return false;
  }
  event.preventDefault(); // Prevent Page Zoom.
  timeSinceLastJump = 0
}
