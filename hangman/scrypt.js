// structure of document

const wrap = document.createElement("div");
wrap.className = "wrapper";
document.body.append(wrap);

const gallow = document.createElement("div");
gallow.className = "gallow";
wrap.append(gallow);

const quiz = document.createElement("div");
quiz.className = "quiz";
wrap.append(quiz);

const word = document.createElement("div");
word.className = "word";
quiz.append(word);

const question = document.createElement("div");
question.className = "question";
quiz.append(question);

const incorrect = document.createElement("div");
incorrect.className = "incorrect";
quiz.append(incorrect);

const keyboard = document.createElement("div");
keyboard.className = "keyboard";
quiz.append(keyboard);

const inner = document.createElement("div");
inner.className = "inner";
document.body.append(inner);

const modal = document.createElement("div");
modal.className = "modal";
inner.append(modal);

const text = document.createElement("div");
text.className = "text";
modal.append(text);

const tryAgain = document.createElement("button");
tryAgain.className = "tryAgain";
modal.append(tryAgain);

let count = 0;
let wrong = 0;
let gall = 1;
let parts = 1;
let guess;
let prev;
let answer = [];
// random word

let obj = {
    hypothesis: "A supposition or proposed explanation made on the basis of limited evidence as a starting point for further investigation",
    television: "A device that receives television signals and reproduces them on a screen",
    charisma: "Compelling attractiveness or charm that can inspire devotion in others",
    reference: "The action of mentioning or alluding to something",
    suspicion: "A feeling or thought that something is possible, likely, or true",
    ambition: "A strong desire to do or to achieve something, typically requiring determination and hard work",
    facility: "A place, amenity, or piece of equipment provided for a particular purpose",
    recovery: "A return to a normal state of health, mind, or strength",
    helicopter: "A type of aircraft",
    dominant: "Most important, powerful, or influential",
    hospital: "An institution providing medical and surgical treatment and nursing care for sick or injured people",
    pollution: "The presence in or introduction into the environment of a substance or thing that has harmful or poisonous effects",
    principle: "A fundamental truth or proposition that serves as the foundation for a system of belief or behavior or for a chain of reasoning",
    distance: "An amount of space between two things or people",
    deviation: "The action of departing from an established course or accepted standard",
    character: "The mental and moral qualities distinctive to an individual",
    interface: "A device or program enabling a user to communicate with a computer",
    radiation: "The emission of energy as electromagnetic waves or as moving subatomic particles, especially high-energy particles which cause ionization",
    advocate: "A person who publicly supports or recommends a particular cause or policy",
    transmission: "Synonym of broadcasting"
}
let arrOfKeys = Object.keys(obj);

function random () {
    let randomWord = arrOfKeys[Math.floor(Math.random() * arrOfKeys.length)];
    return randomWord;
}
let randomWord;
function fillWord () {
    if (count === 0) {
        randomWord = random();
        console.log(randomWord);
        if (prev === randomWord) {
            fillWord();
        }
        prev = randomWord;
        for (let i = 0; i < randomWord.length; i++) {
            answer[i] = "_";
        }
    }
}
fillWord();


// question 
function questionForWord () {
    question.innerHTML = obj[randomWord];
}
questionForWord();


// guesses
function wrongGuess () {
    incorrect.innerHTML = "Incorrect guesses: "+wrong+" / 6";
}
wrongGuess ();


// answer
function newAnswer () {
    let content = document.createTextNode(answer.join(" "));
    word.innerHTML = "";
    word.appendChild(content);
}
newAnswer ();


//keyboard
let key = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

function newKey () {
    let out = "";
    for (let i = 0; i < key.length; i++) {
        out +="<div class='letter' data='"+key[i]+"'>"+key[i]+"</div>";
    }
    document.querySelector(".keyboard").innerHTML = out;
}
newKey()

document.onkeyup = function(event) {
    if (document.querySelector('.keyboard .letter[data="'+event.key+'"]').classList.contains("active") || (!answer.includes("_") || wrong === 6)) {
        return
    }
    document.querySelector('.keyboard .letter[data="'+event.key+'"]').classList.add("active");
    count++;
    gameProcess(event.key);
}

let eventMouse = document.querySelectorAll('.letter');
eventMouse.forEach(item => {
    item.addEventListener ("click", clickMouse);
})

function clickMouse (event) {
    if (event.target.classList.contains("active")) {
        return
    }
    event.target.getAttribute("data");
    event.target.classList.add("active");
    count++;
    gameProcess(event.target.getAttribute("data"));
}

//game process
function createWord () {
    let content = document.createTextNode(answer.join(" "));
    word.innerHTML = "";
    word.appendChild(content);
}

function gameProcess (event) {
    guess = event;
    for (let j = 0; j < randomWord.length; j++) {
        if (randomWord[j] === guess) {
            answer.splice(j, 1, guess)  
        }
    }
    if (!randomWord.includes(guess)) {
        wrong++;
        incorrect.innerHTML = "";
        incorrect.innerHTML = "Incorrect guesses: "+wrong+" / 6";
        draw();
    }
    if (!answer.includes("_") || wrong === 6) {
        endGame();
    }
    return createWord();
}

//end game
const btnTry = document.querySelector(".tryAgain");
btnTry.addEventListener ("click", anotherGame);

function endGame() {
    inner.style.display = "block";
    modal.style.display = "flex";
    text.style.display = "block";
    tryAgain.style.display = "block";
    document.body.style.overflow = "hidden";
    tryAgain.innerHTML = "Try Again";
    if (wrong === 6) {
        text.innerHTML = "You couldn't guess the word "+randomWord+".";
    } else {
        text.innerHTML = "Congratulations! The word "+answer.join("")+" was guessed";
    } 
}
function anotherGame () {
    inner.style.display = "none";
    modal.style.display = "none";
    text.style.display = "none";
    tryAgain.style.display = "none";
    
    count = 0;
    wrong = 0;
    answer = [];
    guess = "";
    parts = 1;
    gall = 1;

    random();
    fillWord();
    questionForWord();
    wrongGuess ();
    createWord();
    newAnswer ();
    newKey();
    gallow.innerHTML = "";
    drawGallow();
    drawGallow();
    drawGallow();
    drawGallow();

    eventMouse = document.querySelectorAll('.keyboard .letter');
    eventMouse.forEach(item => {
        item.addEventListener ("click", clickMouse);
    })
}

// gallow

function draw () {
    const newDraw = document.createElement("img");
    newDraw.className = "part_"+parts;
    newDraw.src = 'img/part_'+parts+'.png';
    parts++;
    return gallow.append(newDraw);
}
function drawGallow () {
    const newDraw = document.createElement("img");
    newDraw.className = "gallow_"+gall;
    newDraw.src = 'img/gallow_'+gall+'.png';
    gall++;
    return gallow.append(newDraw);
}
drawGallow();
drawGallow();
drawGallow();
drawGallow();