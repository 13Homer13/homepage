const backgroundEl = document.getElementById("bg-img");
const aboutmeEl = document.getElementById("aboutme");
const mydreamsEl = document.getElementById("mydreams");
const myprojectsEl = document.getElementById("myprojects");

window.addEventListener("scroll", () => {
    backgroundEl.style.opacity = 1 - window.scrollY*0.001;
    backgroundEl.style.backgroundSize = 120 + window.scrollY*0.1 +"%";
    // aboutmeEl.style.left = 2000 - window.scrollY*2.5 + "px";
   if (window.scrollY > 200) {
    aboutmeEl.style.setProperty("left", 150+"px");
    mydreamsEl.style.setProperty("left", 500+"px");
    myprojectsEl.style.setProperty("left", 850+"px");
   } else {
     aboutmeEl.style.setProperty("left", 2000+"px");
     mydreamsEl.style.setProperty("left", 3000+"px");
     myprojectsEl.style.setProperty("left", 4000+"px");
    }

})
aboutmeEl.addEventListener("mouseover", () => {
    aboutmeEl.innerHTML = `
   This 43 year old guy is a passionate individual who loves to stay active and up to date with the latest technology. He is a fan of Bitcoin and inline skating, and he is looking to further his knowledge and skills in web development. After 15 years working on sea as Officer of the watch now is changing his carrier. He is a hardworking, motivated individual who is eager to learn and take on new challenges. He is an organized and detail-oriented person who is committed to delivering quality results. Bitcoin class 2013.
    `
})
aboutmeEl.addEventListener("mouseleave", () => {
   
    aboutmeEl.innerHTML = `about me`
})