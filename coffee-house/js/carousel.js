const sliderImages = document.querySelectorAll(".favorite__img");
const sliderDots = document.querySelectorAll(".favorite__line");
const sliderNewDots = document.querySelectorAll(".favorite__line_black");
const sliderBlack = document.querySelector(".black");
const sliderBtnPrev = document.querySelector(".arrow1");
const sliderBtnNext = document.querySelector(".arrow2");
const sliderLine = document.querySelector(".favorite__slides");



let sliderCount = 0;
let sliderWidth;
let second = 5000;
let intervalId;

window.addEventListener("resize", showSlide);

sliderBtnNext.addEventListener("click", nextSlide);
sliderBtnPrev.addEventListener("click", prevSlide);
sliderLine.addEventListener ("click", stopClick);
sliderLine.addEventListener ("mouseover", appear);
sliderLine.addEventListener ("mouseout", disappear);


function interval (sec = 5000) {
    intervalId = setInterval( () => {
        nextSlide()
    }, sec);
}

interval();
console.log(intervalId);

function showSlide() {
    sliderWidth = (document.querySelector(".favorite__wrapper").offsetWidth);
    sliderLine.style.width = sliderWidth * sliderImages.length + "px";
    sliderImages.forEach(item => item.style.width = sliderWidth + "px");
    
    rollSlider();
}
showSlide ();

function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;

    rollSlider();
    thisSlide(sliderCount);
}
function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length -1;

    rollSlider();
    thisSlide(sliderCount);
}

function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function thisSlide(index) {
    sliderNewDots.forEach(item => item.classList.remove("black"));
    sliderNewDots[index].classList.add("black");
}
function runSlide () {
    let widthOfLine = document.querySelector(".favorite__line").offsetWidth;
    let widthOfBlackLine = document.querySelector(".favorite__line_black").offsetWidth;
    let percent = (100*widthOfBlackLine)/widthOfLine;
    let sec = (percent*5000)/100;


    interval(sec);
    clearInterval(intervalId);
    interval();

    console.log(sec);
    console.log(widthOfBlackLine);
}
// let percent = sliderNewDots[index].classList.add("black");
function stopClick() { 
    sliderLine.removeEventListener ("mouseover", appear);
    sliderLine.removeEventListener ("mouseout", disappear);
    sliderNewDots[sliderCount].classList.toggle("black-click");
    if (sliderNewDots[sliderCount].classList.contains("black-click")) {
        clearInterval(intervalId);
    } else {
        runSlide();
    }
} 
function appear() {
    sliderLine.removeEventListener ("click", stopClick);
    (sliderNewDots[sliderCount].classList.add("black-click"));
    clearInterval(intervalId);
}
function disappear() {
    sliderLine.addEventListener ("click", stopClick);
    (sliderNewDots[sliderCount].classList.remove("black-click"));
    runSlide();
}