// structure of document

import {listOfPictures, obj, listOfPictures1, obj1, listOfPictures2} from './pictures.js'
// import {} from './fill.js'

let sizeOfField = 5;
let arrCross;

function create (tag, className, append, inner) {
    let x = document.createElement(tag);
    x.className = `${className}`;
    if (inner) {
        x.innerHTML = `${inner}`;
    }
    append.append(x);
}


function createBase () {
    create('section', 'wrapper', document.body);
    create('div', 'wrapper__topLine', document.querySelector('.wrapper'));
    create('div', 'wrapper__verticalLine', document.querySelector('.wrapper'));
    create('div', 'wrapper__empty', document.querySelector('.wrapper__topLine'));
    create('div', 'wrapper__topHints', document.querySelector('.wrapper__topLine'));
    create('div', 'wrapper__verticalHints', document.querySelector('.wrapper__verticalLine'));
    create('div', 'wrapper__mainBlock', document.querySelector('.wrapper__verticalLine'));

    create('div', 'press', document.body);
    create('div', 'press__text', document.querySelector('.press'), 'Menu');


    create('canvas', 'press__canvas', document.querySelector('.press'));
    document.querySelector('.press__canvas').style.height = '40px';
    document.querySelector('.press__canvas').style.width = '40px';

    create('div', 'reset', document.body);
    create('img', 'reset__img', document.querySelector('.reset'));
    document.querySelector('.reset__img').setAttribute('src', 'icons/reset.svg');
    document.querySelector('.reset__img').setAttribute('alt', 'reset')
    create('div', 'reset__btn', document.querySelector('.reset'), 'Reset');

    create('div', 'timer', document.body);
    create('div', 'timer__min', document.querySelector('.timer'), '0');
    create('div', 'timer__semi', document.querySelector('.timer'), ':');
    create('div', 'timer__sec', document.querySelector('.timer'), '0');

    create('audio', 'click-left', document.body);
    create('source', 'click-left__sound', document.querySelector('.click-left'),);
    document.querySelector('.click-left__sound').setAttribute('src', 'sounds/click-left.wav');

    create('audio', 'click-right', document.body);
    create('source', 'click-right__sound', document.querySelector('.click-right'),);
    document.querySelector('.click-right__sound').setAttribute('src', 'sounds/click-right.wav');

    create('audio', 'click-empty', document.body);
    create('source', 'click-empty__sound', document.querySelector('.click-empty'),);
    document.querySelector('.click-empty__sound').setAttribute('src', 'sounds/click-empty.wav');

    create('audio', 'win', document.body);
    create('source', 'win__sound', document.querySelector('.win'),);
    document.querySelector('.win__sound').setAttribute('src', 'sounds/win.wav');

    create('div', 'save', document.body, 'Save game');
    create('div', 'load', document.body, 'Continue last game');

    create('img', 'theme color', document.body);
    document.querySelector('.theme').setAttribute('src', 'icons/theme.svg');
    document.querySelector('.theme').setAttribute('alt', 'theme')

    create('img', 'dice', document.body);
    document.querySelector('.dice').setAttribute('src', 'icons/random.svg');
    document.querySelector('.dice').setAttribute('alt', 'random');

    create('div', 'solution', document.body, 'Solution');

    create('div', 'inner', document.body);

    
    create('div', 'modal', document.querySelector('.inner'));
    create('div', 'modal__text color', document.querySelector('.modal'));
    create('div', 'modal__wrapper', document.querySelector('.modal'));
    create('button', 'modal__tryAgain', document.querySelector('.modal__wrapper'));
    document.querySelector('.modal__tryAgain').innerHTML = 'Menu';
    create('button', 'modal__reset', document.querySelector('.modal__wrapper'), 'Reset');
    create('button', 'modal__random', document.querySelector('.modal__wrapper'), 'Random');
    create('img', 'modal__close', document.querySelector('.modal'));
    document.querySelector('.modal__close').setAttribute('src', 'icons/close.svg');
    document.querySelector('.modal__close').setAttribute('alt', 'close')
}
createBase();

function createDiv (times, className, append) {
    for(let i = 0; i < times; i++) {
        var newDiv = document.createElement('div');
        newDiv.className = 'wrapper__' + className;
        document.querySelector('.wrapper__' + append).append(newDiv);
    }
}
function createCell (times) {
    for(let i = 0; i < times*times; i++) {
        var newDiv = document.createElement('div');
        newDiv.className = 'wrapper__cell';
        newDiv.id = `${i}`
        document.querySelector('.wrapper__mainBlock').append(newDiv);
    }
}

createDiv(sizeOfField, 'vertical-div', 'verticalHints')
createDiv(sizeOfField, 'top-div', 'topHints')
createCell(sizeOfField);


function createMenu () {
    create('div', 'start', document.body);
    create('div', 'start__text color', document.querySelector('.start'));
    document.querySelector('.start__text').innerHTML = 'You can choose difficulty:';
    create('div', 'start__menu color', document.querySelector('.start'));
    create('div', 'start__textForTable', document.querySelector('.start'), 'Table of Records:');
    let count = 1;
    for(let i = 0; i < 3; i++) {
        let newWrap = document.createElement('div');
        newWrap.className = 'start__wrap start__wrap' + i;
        document.querySelector('.start__menu').append(newWrap);
        let newText = document.createElement('div');
        newText.className = 'start__option start__option' + i;
        newWrap.append(newText);
        switch (i) {
            case 0: 
            newText.innerHTML = '5 X 5 Nonograms:';
            break;
            case 1:
            newText.innerHTML = '10 X 10 Nonograms:';
            break;
            case 2:
            newText.innerHTML = '15 X 15 Nonograms:';
            break;
        }
        let newItem = document.createElement('ul');
        newItem.className = 'start__difficulty start__difficulty_' + i;
        newWrap.append(newItem);
        for(let j = 0; j < 5; j++) {
            let newLi = document.createElement('li');
            newLi.className = 'start__item start__item' + j + " " + i;
            document.querySelector('.start__difficulty_' + i).append(newLi);
            // console.log(listOfPictures1[count])
            switch (i) {
                case 0: 
                newLi.innerHTML = listOfPictures[count];
                break;
                case 1:
                newLi.innerHTML = listOfPictures1[count];
                break;
                case 2:
                newLi.innerHTML = listOfPictures2[count];
                break;
            }
            // newLi.innerHTML = listOfPictures[count];
            count += 1; 
        }
        count = 1;
    }
    create('div', 'start__records', document.querySelector('.start'));
    for (let k = 0; k < 5; k += 1) {
        create('div', 'start__row start__row' + k, document.querySelector('.start__records'));
        create('div', 'start__part' + k + ' start__name start__name' + k, document.querySelector('.start__row' + k));
        create('div', 'start__part' + k + ' start__category start__category' + k, document.querySelector('.start__row' + k));
        create('div', 'start__part' + k + ' start__time start__time' + k, document.querySelector('.start__row' + k));
    }
}
createMenu();

function createPicture (color) {
    let canv = document.querySelector('.press__canvas');
    let ctx = canv.getContext('2d');
    ctx.clearRect(0, 0, ctx.width, ctx.height)
    ctx.fillStyle = color;
    ctx.fillRect(90, 70, 140, 30);
    ctx.fillRect(130, 80, 30, 90);
    ctx.fillRect(100, 140, 40, 15);
    ctx.fillRect(90, 0, 40, 90);
    ctx.fillRect(70, 0, 40, 25);
    ctx.fillRect(20, 18, 70, 23);
    ctx.fillRect(0, 25, 40, 15);
    ctx.fillRect(220, 60, 40, 30);
    ctx.fillRect(160, 50, 20, 30);
    ctx.fillRect(160, 0, 25, 90);
    ctx.fillRect(160, 35, 100, 17);
    ctx.fillRect(160, 10, 55, 20);
    ctx.fillRect(160, 25, 80, 20);
    ctx.fillStyle = '#7FFF00';
    ctx.fillRect(83, 8, 20, 15);
}
document.querySelector('.press').addEventListener('mouseover', changeColor);
document.querySelector('.press').addEventListener('mouseout', changeColorBack);
document.querySelector('.press').addEventListener('click', showMenu);

function changeColor () {
    let canv = document.querySelector('.press__canvas');
    let ctx = canv.getContext('2d');
    ctx.clearRect(83, 8, 20, 15)
    ctx.fillStyle = '#FF1493';
    ctx.fillRect(83, 8, 20, 15);
}
function changeColorBack () {
    let canv = document.querySelector('.press__canvas');
    let ctx = canv.getContext('2d');
    ctx.clearRect(83, 8, 20, 15)
    ctx.fillStyle = '#7FFF00';
    ctx.fillRect(83, 8, 20, 15);
}
function showMenu () {
    document.querySelector('.start').classList.toggle('start_active');
    if ((document.querySelector(".inner").style.display) === "block") {
        document.querySelector(".inner").style.display = "none"
    } else {
        document.querySelector(".inner").style.display = "block";
    }
    document.querySelector(".inner").classList.toggle('inner_low');
    document.body.style.overflow = "hidden";
}

createPicture('#000000');

function changeSize (size) {
    sizeOfField = size;
    document.querySelector('.wrapper__topHints').innerHTML = '';
    document.querySelector('.wrapper__verticalHints').innerHTML = '';
    document.querySelector('.wrapper__mainBlock').innerHTML = '';
    createDiv(sizeOfField, 'vertical-div', 'verticalHints')
    createDiv(sizeOfField, 'top-div', 'topHints')
    createCell(sizeOfField);
    document.querySelector('.wrapper__mainBlock').style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    document.querySelector('.wrapper__mainBlock').style.gridTemplateRows = `repeat(${size}, 1fr)`;
    document.querySelector('.wrapper__topHints').style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    if (size > 5) {
        console.log(size)
        let arrOfCells = document.querySelectorAll('.wrapper__vertical-div');
        let arrOfCells1 = document.querySelectorAll('.wrapper__top-div');
        let arrOfCells2 = document.querySelectorAll('.wrapper__cell');
    
        arrOfCells.forEach((item) => {
            if (arrOfCells[count1 + 1] !== undefined && (count1 === 4 || count1 === 9)) {
                item.style.borderBottom = 'solid black 3px';
            }
            count1 += 1;
        })
        arrOfCells1.forEach((item) => {
            if (arrOfCells1[count2 + 1] !== undefined && (count2 === 4 || count2 === 9)) {
                
                item.style.borderRight = 'solid black 3px';
            }
            count2 += 1;
        })
        if (size === 10) {
            arrOfCells2.forEach((item) => {
                if (arrOfCells2[count3 + 1] !== undefined && (count3 >= 40 && count3 < 50)) {
                    item.style.borderBottom = 'solid black 3px';
                    // for (let v = 0; v < 9; v += 1) { 
                    // }
                }
                count3 += 1;
            });
            count3 = 0;
            arrOfCells2.forEach((item) => {
                if (arrOfCells2[count3 + 1] !== undefined && item.id.slice(-1) === '4') {
                    item.style.borderRight = 'solid black 3px';
                    // for (let v = 0; v < 9; v += 1) { 
                    // }
                }
                count3 += 1;
            })
        }
        if (size === 15) {
            arrOfCells2.forEach((item) => {
                if ((count3 >= 60 && count3 < 75) || (count3 >= 135 && count3 < 150)) {
                    item.style.borderBottom = 'solid black 3px';
                }
                count3 += 1;
            });
            count3 = 0;
            let count4 = 4;
            arrOfCells2.forEach((item) => {
                if (count3 === count4) {
                    item.style.borderRight = 'solid black 3px';
                    count4 += 5;
                }
                count3 += 1;
            })
        }
    }
}

export {create, createBase, createDiv, createCell, createMenu, createPicture, showMenu, changeSize}
