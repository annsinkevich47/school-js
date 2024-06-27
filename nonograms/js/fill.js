import {listOfPictures, listOfPictures1, listOfPictures2, obj, obj1, obj2} from './pictures.js'
import {showMenu, createCell, createDiv, changeSize, createPicture} from './structure.js'

let correctPictureId = [];
let userPictureId = [];
let randomNumber;
let prevNumber;
let time;
let timeMin;
let sec = 0;
let min = 0;
let numberOfSavedGames = 0;
// let countOfRecords = 0;

function random (number) {
    randomNumber = Math.floor(1 + Math.random() * (number + 1 - 1));
    if (randomNumber === prevNumber) {
        random(number);
    }
    prevNumber = randomNumber;
    return randomNumber;
}
random(5);

function randomSize () {
    return Math.floor(1 + Math.random() * (3 + 1 - 1));
}

let puzzle = obj[listOfPictures[randomNumber]];
let namePuzzle = listOfPictures[randomNumber];


function createField (picture) {
    let cells = document.querySelectorAll('.wrapper__cell');
    let count = 0;
    for(let i = 0; i < picture.length; i++) {
        for(let j = 0; j < picture[i].length; j++) {
            if (picture[i][j] === 1) {
                correctPictureId.push(cells[count].id)
            }
            // cells[count].innerHTML = picture[i][j];
            count += 1;
        }
    }
}
createField(obj[listOfPictures[randomNumber]])

function matrixOfLeftHints (picture) {
    let cells = document.querySelectorAll('.wrapper__vertical-div');
    let arrOfHints = [];
    let countOfHints = 0;
    let countOfCells = 0;
    for(let i = 0; i < picture.length; i++) {
        for(let j = 0; j < picture[i].length; j++) {
            if ((picture[i][j] === 0 && j != 0) || j + 1 >= picture[i].length) {
                if (j + 1 >= picture[i].length && picture[i][j] !== 0) {
                    countOfCells += 1;
                }
                arrOfHints.push(countOfCells);
                countOfCells = 0;
            } else if (picture[i][j] !== 0) {
                countOfCells += 1;
            } 
        }
        cells[countOfHints].innerHTML = arrOfHints.join('').replace(/0/g, '').split('').join('  ');
        countOfHints += 1;
        arrOfHints = [];
    }
}
matrixOfLeftHints(obj[listOfPictures[randomNumber]]);

function matrixOfTopHints (picture) {
    let cells = document.querySelectorAll('.wrapper__top-div');
    let arrOfHints = [];
    let countOfHints = 0;
    let countOfCells = 0;
    for(let i = 0; i < picture.length; i++) {
        let element = picture.map((item) => item[i]);
        for(let j = 0; j < element.length; j++) {
            if ((element[j] === 0 && j != 0) || j + 1 >= element.length) {
                if (j + 1 >= element.length && element[j] !== 0) {
                    countOfCells += 1;
                }
                arrOfHints.push(countOfCells);
                countOfCells = 0;
            } else if (element[j] !== 0) {
                countOfCells += 1;
            } 
        }
        cells[countOfHints].innerHTML = arrOfHints.join('').replace(/0/g, '').split('').join('  ');
        countOfHints += 1;
        arrOfHints = [];
    }
}
matrixOfTopHints(obj[listOfPictures[randomNumber]]);

function eventListeners () {
    const cell = document.querySelectorAll('.wrapper__cell');
    cell.forEach((item) => {
    item.addEventListener("click", clickOnCell);
    })

    document.querySelectorAll('.start__item').forEach((item) => {
        item.addEventListener('click', clickOnMenuItem);
    })

    document.querySelectorAll('.wrapper__cell').forEach((item) => {
        item.addEventListener('contextmenu', rightClick);
    })
    
    document.querySelector('.reset').addEventListener('click', reset);
    document.querySelector('.modal__reset').addEventListener('click', reset);
    document.querySelector('.modal__tryAgain').addEventListener('click', anotherGame);
    document.querySelector('.modal__random').addEventListener('click', randomGame);

    document.querySelector('.save').addEventListener('click', saveGame);
    document.querySelector('.load').addEventListener('click', loadGame);

    document.querySelector('.theme').addEventListener('click', changeTheme);

    document.querySelector('.dice').addEventListener('click', randomGame);

    document.querySelector('.solution').addEventListener('click', showSolution);

    document.querySelector('.modal__close').addEventListener('click', closeModal);
}
eventListeners();


function clickOnCell (event) {
    if (!time) {
        timer();
    }
    if (!event.currentTarget.classList.contains('wrapper_cross-lines') && document.querySelector('.theme').classList.contains('color')) {
        event.currentTarget.classList.toggle("active");
    } else if (!event.currentTarget.classList.contains('wrapper_cross-lines-dark') && !document.querySelector('.theme').classList.contains('color')) {
        event.currentTarget.classList.toggle("active-dark");
    }
    if (event.currentTarget.classList.contains("active") || event.currentTarget.classList.contains("active-dark")) {
        userPictureId.push(event.currentTarget.id);
    } else {
        userPictureId = userPictureId.filter((item) => item != event.currentTarget.id);
    }
    userPictureId.sort(function(a, b) {
        return a - b;
    });
    if (event.currentTarget.classList.contains("active") || event.currentTarget.classList.contains("active-dark")) {
        document.querySelector('.click-left').play();
    } else if (!event.currentTarget.classList.contains("wrapper_cross-lines") && !event.currentTarget.classList.contains("wrapper_cross-lines-dark")) {
        document.querySelector('.click-empty').play();
    }
    // console.log(userPictureId);
    if (correctPictureId.toString() === userPictureId.toString()) {
        endGame();
    }
}

// console.log(correctPictureId)

function endGame() {
    document.querySelector('.win').play();
    clearInterval(time);
    clearInterval(timeMin);
    let endTime = min*60 + sec;
    let modal = document.querySelector(".modal");
    document.querySelector(".inner").style.display = "block";
    modal.style.display = "flex";
    document.querySelector(".modal__text").innerHTML = `Great! You have solved the nonogram in ${endTime} seconds!`;
    document.body.style.overflow = "hidden";
    if (!document.querySelector('.solution').classList.contains('show')) {
        createRecords(endTime);
        sortTable();
    } else {
        document.querySelector('.solution').classList.remove('show');
    }
    
}


function clickOnMenuItem (event) {
    // let puzzle;
    switch (Number(event.currentTarget.classList[2])) {
        case 0: 
        puzzle = obj[event.currentTarget.innerHTML];
        changeSize(5);
        namePuzzle = event.currentTarget.innerHTML;
        eventListeners();
        break;
        case 1:
        puzzle = obj1[event.currentTarget.innerHTML];
        changeSize(10);
        namePuzzle = event.currentTarget.innerHTML;
        eventListeners();
        break;
        case 2:
        puzzle = obj2[event.currentTarget.innerHTML];  
        changeSize(15);
        namePuzzle = event.currentTarget.innerHTML;
        eventListeners();
        break;
    }
    reset(event);
    correctPictureId = [];
    userPictureId = [];
    createField(puzzle);
    matrixOfLeftHints(puzzle);
    matrixOfTopHints(puzzle);
    showMenu();
}


function rightClick (event) {
    if (!time) {
        timer();
    }
    event.preventDefault();
   
    if ((!event.currentTarget.classList.contains('active')) && (!event.currentTarget.classList.contains('active-dark'))) {
        if (document.querySelector('.theme').classList.contains('color')) {
            event.currentTarget.classList.toggle('wrapper_cross-lines');
        } else {
            event.currentTarget.classList.toggle('wrapper_cross-lines-dark')
        }
    }
    if (event.currentTarget.classList.contains('wrapper_cross-lines') || event.currentTarget.classList.contains('wrapper_cross-lines-dark')) {
        document.querySelector('.click-right').play();
    } else if (!event.currentTarget.classList.contains("active") && !event.currentTarget.classList.contains("active-dark")) {
        document.querySelector('.click-empty').play();
    }
}

function closeModal (event) {
    document.querySelector(".inner").style.display = "none";
    document.querySelector(".modal").style.display = "none";
    document.body.style.overflow = "visible";
    if (event.currentTarget.classList.contains('modal__close')) {
        document.querySelectorAll('.wrapper__cell').forEach((item) => {
            item.removeEventListener('click', clickOnCell);
            item.removeEventListener('contextmenu', rightClick);
        })
    }
}
function reset (event) {
    userPictureId = [];
    document.querySelectorAll('.wrapper__cell').forEach((item) => {
        item.classList.remove('active-dark');
        item.classList.remove('wrapper_cross-lines-dark');
        item.classList.remove('active');
        item.classList.remove('wrapper_cross-lines');
        clearInterval(time);
        clearInterval(timeMin);
    })
    if (event.currentTarget.classList.contains('modal__reset')) {
        closeModal(event);
    }
    time = undefined;
    timeMin = undefined;
    min = 0;
    sec = 0;
    document.querySelector('.timer__min').innerHTML = '0';
    document.querySelector('.timer__sec').innerHTML = '0';
}

function anotherGame (event) {
    closeModal(event);
    reset(event);
    showMenu();
}

function randomGame (event) {
    random(5);
    let size = randomSize();
    switch (size) {
        case 1: 
        puzzle = obj[listOfPictures[randomNumber]];
        namePuzzle = listOfPictures[randomNumber]
        changeSize(5);
        eventListeners();
        break;
        case 2:
        puzzle = obj1[listOfPictures1[randomNumber]];
        namePuzzle = listOfPictures1[randomNumber]
        changeSize(10);
        eventListeners();
        break;
        case 3:
        puzzle = obj2[listOfPictures2[randomNumber]];
        namePuzzle = listOfPictures2[randomNumber]
        changeSize(15);
        eventListeners();
        break;
    }
    reset(event);
    correctPictureId = [];
    userPictureId = [];
    createField(puzzle);
    matrixOfLeftHints(puzzle);
    matrixOfTopHints(puzzle);
    closeModal(event);
}

function timer () {
    time = setInterval(() => {
        sec++;
        if (sec === 60) {
            sec = 0;
        }
        document.querySelector('.timer__sec').innerHTML = sec.toString().padStart(2, '0');
    }, 1000);
    timeMin = setInterval(() => {
        min++;
        document.querySelector('.timer__min').innerHTML = min.toString().padStart(2, '0');
    }, 60000);
}

function saveGame () {
    let save = {};
    let arrCross = [];
    let cells = document.querySelectorAll('.wrapper__cell');
    cells.forEach((item) => {
        for (let i = 0; i < cells.length; i++) {
            if (item.classList[1] === 'wrapper_cross-lines') {
                arrCross.push(item.id);
            }
        }
    })
    save.minutes = min;
    save.seconds = sec;
    save.correct = correctPictureId;
    save.user = userPictureId;
    save.name = puzzle;
    save.cross = arrCross;
    let keys = Object.keys(localStorage);
    let newArr = [];
    for (let key of keys) {
        if (!isNaN(Number(key))) {
            key = Number(key);
            newArr.push(key)
        }
    }
    if (keys.length === 0) {
        numberOfSavedGames = 0;
    } else {
        numberOfSavedGames = Math.max(...newArr) + 1;
    }
    localStorage.setItem(numberOfSavedGames.toString(), JSON.stringify(save))
}

function cellsToBlack (storage) {
    let cells = document.querySelectorAll('.wrapper__cell');
    cells.forEach((item) => {
        for (let i = 0; i < cells.length; i++) {
            if (storage.includes(item.id)) {
                if (document.querySelector('.theme').classList.contains('color')) {
                    item.classList.add("active");
                } else {
                    item.classList.add('active-dark');
                }
            }
        }
    })
}

function loadGame (event) {
    reset(event);
    correctPictureId = [];
    userPictureId = [];
    let keys = Object.keys(localStorage);
    keys.sort(function (a, b) { return a - b }) 
    let arrProgress = [];
    for (let key of keys) {
        if (!isNaN(Number(key))) {
            arrProgress.push(JSON.parse(localStorage[key]));
        }
    }
    let savedProgress = arrProgress[arrProgress.length - 1];
    // console.log((savedProgress.name).length)
    if ((savedProgress.name).length !== document.querySelectorAll('.wrapper__top-div').length) {
        changeSize((savedProgress.name).length);
        eventListeners();
    } else {
        createField(savedProgress.name);
    }
    matrixOfLeftHints(savedProgress.name);
    matrixOfTopHints(savedProgress.name);
  
    correctPictureId = savedProgress.correct;
    userPictureId = savedProgress.user;
    sec = savedProgress.seconds;
    min = savedProgress.minutes;
    document.querySelector('.timer__sec').innerHTML = sec.toString().padStart(2, '0');
    document.querySelector('.timer__min').innerHTML = min.toString().padStart(2, '0');
    cellsToBlack(userPictureId);
    let cells = document.querySelectorAll('.wrapper__cell');
    cells.forEach((item) => {
        for (let i = 0; i < cells.length; i++) {
            if (savedProgress.cross.includes(item.id)) {
                item.classList.add('wrapper_cross-lines');
            }
        }
    })
    if (!document.querySelector('.theme').classList.contains('color')) {
        document.querySelectorAll('.active').forEach ((item) => {
            item.classList.remove('active');
            item.classList.add('active-dark');
        })
        document.querySelectorAll('.wrapper_cross-lines').forEach ((item) => {
            item.classList.remove('wrapper_cross-lines');
            item.classList.add('wrapper_cross-lines-dark');
        })
    }
}

function changeTheme () {
    if (document.querySelector('.theme').classList.contains('color')) {
        document.querySelector('*').style.backgroundColor = '#56667A';
        document.querySelector('*').style.color = '#A7ADC6';
        // document.querySelector('.wrapper__verticalLine').style.borderColor = '#A7ADC6';
        // document.querySelector('.wrapper__empty').style.borderColor = '#A7ADC6';
        // document.querySelectorAll('.wrapper__top-div').forEach((item) => {
        //     item.style.borderColor = '#A7ADC6';
        // })
        // document.querySelectorAll('.wrapper__vertical-div').forEach((item) => {
        //     item.style.borderColor = '#A7ADC6';
        // })
        // document.querySelector('.wrapper__verticalHints').style.borderColor = '#A7ADC6';
        // document.querySelectorAll('.wrapper__cell').forEach((item) => {
        //     item.style.borderColor = '#A7ADC6';
        // })
        document.querySelector('.timer__min').style.borderColor = '#A7ADC6';
        document.querySelector('.timer__sec').style.borderColor = '#A7ADC6';
        document.querySelector('.theme').setAttribute('src', 'icons/theme-dark.svg');
        document.querySelector('.dice').setAttribute('src', 'icons/random-dark.svg');
        document.querySelector('.modal__close').setAttribute('src', 'icons/close-dark.svg');
        document.querySelector('.reset__img').setAttribute('src', 'icons/reset-dark.svg');
        document.querySelector('.start').style.backgroundColor = '#2C1320';
        createPicture('#00A5CF');
        document.querySelectorAll('.active').forEach ((item) => {
            item.classList.remove('active');
            item.classList.add('active-dark');
        })
        document.querySelectorAll('.wrapper_cross-lines').forEach ((item) => {
            item.classList.remove('wrapper_cross-lines');
            item.classList.add('wrapper_cross-lines-dark');
        })
        document.querySelector('.modal').style.backgroundColor = '#2C1320';
        document.querySelector('.modal__tryAgain').style.backgroundColor = '#56667A';
        document.querySelector('.modal__reset').style.backgroundColor = '#56667A';
        document.querySelector('.modal__random').style.backgroundColor = '#56667A';
        document.querySelector('.modal__tryAgain').style.color = '#A7ADC6';
        document.querySelector('.modal__reset').style.color = '#A7ADC6';
        document.querySelector('.modal__random').style.color = '#A7ADC6';
    } else {
        document.querySelector('*').style.backgroundColor = '#C3DBE0';
        document.querySelector('*').style.color = '#000000';
        // document.querySelector('.wrapper__verticalLine').style.borderColor = '#000000';
        // document.querySelector('.wrapper__empty').style.borderColor = '#000000';
        // document.querySelector('.wrapper__verticalHints').style.borderColor = '#000000';
        document.querySelector('.timer__min').style.borderColor = '#000000';
        document.querySelector('.timer__sec').style.borderColor = '#000000';
        document.querySelector('.theme').setAttribute('src', 'icons/theme.svg');
        document.querySelector('.dice').setAttribute('src', 'icons/random.svg');
        document.querySelector('.modal__close').setAttribute('src', 'icons/close.svg')
        document.querySelector('.reset__img').setAttribute('src', 'icons/reset.svg');
        document.querySelector('.start').style.backgroundColor = '#446bd4';
        createPicture('#000000');
        document.querySelectorAll('.active-dark').forEach ((item) => {
            item.classList.remove('active-dark');
            item.classList.add('active');
        })
        document.querySelectorAll('.wrapper_cross-lines-dark').forEach ((item) => {
            item.classList.remove('wrapper_cross-lines-dark');
            item.classList.add('wrapper_cross-lines');
        })
        document.querySelector('.modal').style.backgroundColor = '#50c4e7';
        document.querySelector('.modal__tryAgain').style.backgroundColor = 'unset';
        document.querySelector('.modal__reset').style.backgroundColor = 'unset';
        document.querySelector('.modal__random').style.backgroundColor = 'unset';
        document.querySelector('.modal__tryAgain').style.color = '#000000';
        document.querySelector('.modal__reset').style.color = '#000000';
        document.querySelector('.modal__random').style.color = '#000000';
    }
    document.querySelector('.theme').classList.toggle('color');
}

function showSolution () {
    cellsToBlack(correctPictureId);
    document.querySelector('.solution').classList.add("show");
    endGame()
}


let i = 0;
let end = 0;

function createRecords (time) {
    let letters = ['a', 'b', 'c', 'd', 'e'];

    let keys = Object.keys(localStorage);

    let countOfRecords;

    findRepeats()
    function findRepeats () {
        if (keys.includes(letters[i])) {
            i += 1;
            if (letters[i] === undefined) {
                // console.log("!!!")
                i = 0;
                end += 1;
                return countOfRecords = 0;
            } 
            return countOfRecords = i;
        } else {
            // console.log("@@@");
            return countOfRecords = i
        }
    }
    // console.log(countOfRecords)
 
    let category = '';
    switch (puzzle.length) {
        case 5:
        category = '5 X 5 Nonograms:'
        break;
        case 10:
        category = '10 X 10 Nonograms:'
        break;
        case 15:
        category = '15 X 15 Nonograms:'
        break;
    }

    document.querySelector('.start__name' + countOfRecords).innerHTML = namePuzzle;
    document.querySelector('.start__category' + countOfRecords).innerHTML = category;
    document.querySelector('.start__time' + countOfRecords).innerHTML = time;


    let saveRecord = {};
    let arrNames = [];
    let arrCategory = [];
    let arrTime = [];
    let names = document.querySelectorAll('.start__name');
    names.forEach((item) => {
        arrNames.push(item.innerHTML);
        // console.log(arrNames)
    })
    let categories = document.querySelectorAll('.start__category');
    categories.forEach((item) => {
        arrCategory.push(item.innerHTML);
    })
    let times = document.querySelectorAll('.start__time');
    times.forEach((item) => {
        arrTime.push(item.innerHTML);
    })
    saveRecord.name = arrNames;
    saveRecord.category = arrCategory;
    saveRecord.time = arrTime;

    
    localStorage.setItem(letters[countOfRecords], JSON.stringify(saveRecord))
    // console.log(saveRecord)

    countOfRecords += 1;
}


function loadRecord () {
    let keys = Object.keys(localStorage);
    let arrProgress = [];
    // console.log(keys)
    // console.log (parseInt(keys[1]))
    // arrProgress = keys.filter((item) => (parseInt(item) === NaN))
    for (let key of keys) {
        if (isNaN(key)) {
            arrProgress.push(key);
        }
    }
    arrProgress.sort();
    // console.log(arrProgress)
    let countOfRecords = 0;
    arrProgress.forEach(function sortSaves(item) {
        document.querySelector('.start__name' + countOfRecords).innerHTML = JSON.parse(localStorage.getItem(arrProgress[countOfRecords])).name[countOfRecords];
        document.querySelector('.start__category' + countOfRecords).innerHTML = JSON.parse(localStorage.getItem(arrProgress[countOfRecords])).category[countOfRecords];
        document.querySelector('.start__time' + countOfRecords).innerHTML = JSON.parse(localStorage.getItem(arrProgress[countOfRecords])).time[countOfRecords];
        countOfRecords += 1;
        // console.log(item)
    }) 
}
loadRecord();

function sortTable () {
    let arrOfTime = [];
    document.querySelectorAll('.start__time').forEach((item) => {
        arrOfTime.push(item.innerHTML);
    })
    let sortArr = arrOfTime.toSorted((a, b) => a - b);
    for (let y = 0; y < sortArr.length; y += 1) {
        document.querySelectorAll('.start__time').forEach((item) => {
            if (item.innerHTML === sortArr[y]) {
                let number = item.className.slice(-1);
                document.querySelector('.start__row' + number).style.order = y.toString();
            }
        })
    }
}
sortTable()

export {createField, matrixOfLeftHints, matrixOfTopHints}