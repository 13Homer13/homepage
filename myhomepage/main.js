const backgroundEl = document.body;
const aboutme = document.getElementById("aboutme");
const skills = document.getElementById("skills");
const contact = document.getElementById("contact");
const hamburger = document.querySelector(".hamburger");
const container = document.querySelector(".container")
let audio = new Audio("./assets/audio/babel.mp3");
audio.loop = true;
window.addEventListener("scroll", () => {
   
    backgroundEl.style.backgroundSize = 100 + window.scrollY*0.05 +"%";
    
   if (window.scrollY > 210)  {
    audio.play();
    aboutme.style.setProperty("left", 8+"%");
    skills.style.setProperty("left", 38+"%");
    contact.style.setProperty("left", 68+"%");
   } 
   else {
    audio.pause();
     aboutme.style.setProperty("left", 2000+"px");
     skills.style.setProperty("left", 3000+"px");
     contact.style.setProperty("left", 4000+"px");
    }

})

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    container.classList.toggle("active");
    if (audio.paused) {
        audio.currentTime = 0;
        audio.play();
      } else {
        audio.pause();
      }
    
})



