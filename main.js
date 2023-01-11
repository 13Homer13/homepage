const backgroundEl = document.getElementById("bg-img");
const aboutmeEl = document.getElementById("aboutme");
const mydreamsEl = document.getElementById("mydreams");
const myprojectsEl = document.getElementById("myprojects");

window.addEventListener("scroll", () => {
    backgroundEl.style.opacity = 1 - window.scrollY*0.001;
    backgroundEl.style.backgroundSize = 120 + window.scrollY*0.1 +"%";
    // aboutmeEl.style.left = 2000 - window.scrollY*2.5 + "px";
   if (window.scrollY > 200) {
    aboutmeEl.style.setProperty("left", 200+"px");
    mydreamsEl.style.setProperty("left", 500+"px");
    myprojectsEl.style.setProperty("left", 800+"px");
   } else {
     aboutmeEl.style.setProperty("left", 2000+"px");
     mydreamsEl.style.setProperty("left", 3000+"px");
     myprojectsEl.style.setProperty("left", 4000+"px");
    }

})