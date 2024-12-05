import products from "./products.json" with {type: "json"};

const button = document.querySelectorAll(".menu__button");

var category = "coffee";

function displayWidth() {
    if (document.querySelectorAll(".menu__item").length < 5 || document.documentElement.clientWidth > 768) {
        let newLoad = document.querySelector(".menu__refresh");
        newLoad.style.display = "none";
    }
    // if (document.querySelectorAll(".menu__item").length < 5) {
    //     document.getElementById("menu__dishes").style.display = "flex";
    // }
}

button.forEach(item => {
    item.addEventListener("click", getInput);
})



let indexVar = 0;

const ROOT__CARD = document.getElementById("menu__dishes");
class Card {

    render() {
        let htmlCatalog1 = "";

        products.forEach((element, index) => {
            if (element.category == category) {
                htmlCatalog1 += `
                <div class="menu__item ${indexVar}">
                    <div class="menu__photo"><img src=${element.image} alt=${element.name} ${index}></div>
                    <div class="menu__descr">
                        <div class="menu__letters">
                            <div class="menu__name">${element.name}</div>
                            <div class="menu__text">${element.description}</div>
                        </div>
                        <div class="menu__price">${element.price}</div>
                    </div>
                </div>
                `
            }
            indexVar++
            if (indexVar < 10) {
                indexVar
            }

            // console.log(indexVar);
        });
        indexVar = 0;
        const html1 = `
    ${htmlCatalog1}
    `;
        ROOT__CARD.innerHTML = html1;
    }
}
const cardPage = new Card();
cardPage.render();

function getInput(event) {
    let eventClass = event.currentTarget.className.slice(39);
    let newBtnCat = document.querySelectorAll(".menu__button");
    newBtnCat.forEach(item => item.classList.remove("blackBtnModal"));
    event.currentTarget.classList.add("blackBtnModal");
    let nameRadio = document.getElementsByName("category");
    for (let i = 0; i < nameRadio.length; i++) {
        if (nameRadio[i].id == eventClass) {
            category = nameRadio[i].value;
            ROOT__CARD.innerHTML = "";
            ROOT__PROD.innerHTML = "";
            cardPage.render();
            productsPage.render();
            refresh();
        }
    }
}

var end = 0;
function ref(end) {
    document.querySelector(".modal__total_price").textContent = end;
    console.log(end);
    console.log(document.querySelector(".modal__total_price"));
}

const ROOT__PROD = document.getElementById("modal__wrapper");

class Prod {

    render() {
        let htmlCatalog = "";

        products.forEach((element, index) => {

            if (element.category == category) {
                htmlCatalog += `
            <div class="modal__wrap ${index}">
                <div class="modal__photo"><img class="modal__img" src=${element.image} alt=${element.name}></div>
                <div class="modal__descr">
                    <div class="modal__header">
                        <div class="modal__name">${element.name}</div>
                        <div class="modal__text">${element.description}</div>
                    </div>   
                    <div class="modal__size">
                    <div class="modal__size_text">Size</div>
                    <div class="modal__size_items">
                        <div class="modal__size_item blackBtnModal">
                        <input type="radio" class="input_size ${index}" id="size_s${index}" name="200 ml" value="s" checked="checked">
                            <label class="modal__size_wrap" for="size_s${index}">
                                <div class="modal__size_item_sizeName">S</div>
                                <div class="modal__size_item_sizeValue">${element.sizes.s.size}</div>
                            </label>
                        </div>
                        <div class="modal__size_item">
                        <input type="radio" class="input_size ${index}" id="size_m${index}" name="300 ml" value="m">
                            <label class="modal__size_wrap" for="size_m${index}">
                                <div class="modal__size_item_sizeName">M</div>
                                <div class="modal__size_item_sizeValue">${element.sizes.m.size}</div>
                            </label>
                        </div>
                        <div class="modal__size_item">
                        <input type="radio" class="input_size ${index}" id="size_l${index}" name="400 ml" value="l">
                            <label class="modal__size_wrap" for="size_l${index}">
                                <div class="modal__size_item_sizeName">L</div>
                                <div class="modal__size_item_sizeValue">${element.sizes.l.size}</div>
                            </label>
                        </div>
                    </div>
                    </div>
                    <div class="modal__additives">
                    <div class="modal__additives_text">Additives</div>
                    <div class="modal__additives_items">
                        <div class="modal__additives_item">
                            <input type="checkbox" class="input_adds ${index}" id="sugar${index}" name="Sugar">
                            <label class="modal__additives__wrap" for="sugar${index}">
                                <div class="modal__additives_item_number">1</div>
                                <div class="modal__additives_item_name">${element.additives[0].name}</div>
                            </label>
                        </div>
                        <div class="modal__additives_item">
                            <input type="checkbox" class="input_adds ${index}" id="cinnamon${index}" name="Cinnamon">
                            <label class="modal__additives__wrap" for="cinnamon${index}">
                                <div class="modal__additives_item_number">2</div>
                                <div class="modal__additives_item_name">${element.additives[1].name}</div>
                            </label>
                        </div>
                        <div class="modal__additives_item">
                            <input type="checkbox" class="input_adds ${index}" id="syrup${index}" name="Syrup">
                            <label class="modal__additives__wrap" for="syrup${index}">
                                <div class="modal__additives_item_number">3</div>
                                <div class="modal__additives_item_name">${element.additives[2].name}</div>
                            </label>
                        </div>       
                    </div>     
                    </div>
                    <div class="modal__total">
                        <div class="modal__total_text">Total</div>
                        <div class="modal__total_price ${index}">${element.price}</div>
                    </div>
                    <div class="modal__alert">
                    <div class="modal__alert_img"><img src="icons/info.png" alt="info"></div>
                    <div class="modal__alert_text">The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</div>
                    </div>
                    <button class="modal__close">Close</button>
                </div>
            </div>
            `
            }

        });
        const html = `
        ${htmlCatalog}
        `;
        ROOT__PROD.innerHTML = html;
    }
}
const productsPage = new Prod();
productsPage.render();



function refresh() {
    let indexVar2 = 0;
    let modal = document.getElementById("modal");
    let inner = document.getElementById("inner");
    let image = document.querySelectorAll(".menu__item");
    let itemMenu = document.querySelectorAll(".modal__wrap");

    image.forEach(item => {
        item.addEventListener("click", showModal, true);
    })
    inner.addEventListener("click", closeModal);
    load.style.display = "flex";
    const buttonsSize = document.querySelectorAll(".modal__size_item");
    const buttonsAdditives = document.querySelectorAll(".modal__additives_item");
    const buttonInput = document.querySelectorAll(".input_adds");

    buttonsSize.forEach(item => {
        item.addEventListener("click", makeActive);
    })
    buttonsAdditives.forEach(item => {
        item.addEventListener("click", makeActive1);
    })
    buttonInput.forEach(item => {
        item.addEventListener("click", getPrice);
    })
    const close = document.querySelectorAll(".modal__close");
    close.forEach(item => {
        item.addEventListener("click", closeM);
    })
    displayWidth();

}



let modal = document.getElementById("modal");
let inner = document.getElementById("inner");
let image = document.querySelectorAll(".menu__item");
let itemMenu = document.querySelectorAll(".modal__wrap");
let load = document.querySelector(".menu__refresh");



image.forEach(item => {
    item.addEventListener("click", showModal, true);
})
inner.addEventListener("click", closeModal);
load.addEventListener("click", loadMore);

let goal;
function showModal(event) {
    modal.style.display = "block";
    inner.style.display = "block";
    let classes = event.currentTarget.className.slice(11);
    let newItems = document.querySelectorAll(".modal__wrap");
    newItems.forEach(item => {
        let f = item.className.slice(12);
        if (classes == f) {
            goal = item;
        }
    })
    goal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeModal(event) {

    const withinBoundaries = event.composedPath().includes(modal);

    if (!withinBoundaries) {
        modal.style.display = 'none';
        inner.style.display = "none";
        document.body.style.overflow = "visible";
        goal.style.display = "none";
    }
}

function loadMore() {
    let newImage = document.querySelectorAll(".menu__item");
    newImage.forEach(item => {
        item.style.display = "block";
    })

    load.style.display = "none";
}

const buttonsSize = document.querySelectorAll(".modal__size_item");
const buttonsAdditives = document.querySelectorAll(".modal__additives_item");
const buttonInput = document.querySelectorAll(".input_adds");
const buttonInput1 = document.querySelectorAll(".input_size");
const close = document.querySelectorAll(".modal__close");

buttonsSize.forEach(item => {
    item.addEventListener("click", makeActive);
})
buttonsAdditives.forEach(item => {
    item.addEventListener("click", makeActive1);
})
buttonInput.forEach(item => {
    item.addEventListener("click", getPrice);
})
buttonInput1.forEach(item => {
    item.addEventListener("click", getPrice1);
})
close.forEach(item => {
    item.addEventListener("click", closeM);
})




function closeM() {
    close.forEach(item => {
        modal.style.display = 'none';
        inner.style.display = "none";
        document.body.style.overflow = "visible";
        goal.style.display = "none";
    })
}



let innerPrice = 0;
var count = 0;

function getPrice(event) {
    let name = event.target.name;
    let newClass = event.currentTarget.className.slice(11);
    let trade = event.currentTarget;
    trade.classList.add("active");
    console.log(trade);


    // console.log(newClass);
    // console.log(name)
    for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < 3; j++) {
            let docName = (products[i].additives[j].name);
            if (docName === name) {
                let addPrice = Number((products[i].additives[j]["add-price"]));
                let biblioClass = document.querySelectorAll(".modal__total_price");
                // console.log(biblioClass);
                let goal;
                let activeDiv;
                biblioClass.forEach(item => {
                    let b = item.className.slice(19);
                    // console.log(b);
                    if (newClass == b) {
                        goal = item;
                    }
                })
                console.log(goal)
                let innerPrice;
                if (goal == undefined) {
                    trade.classList.remove("active");
                } else {
                    innerPrice = Number(goal.innerHTML);
                }
                // console.log(goal);
                // console.log(innerPrice);
                let totalPrice = innerPrice += addPrice;
                end += totalPrice;

                // document.querySelectorAll(".modal__additives_item").forEach(item => {
                //     console.log(item.className);
                // })
                makeActive3();
                countTotal(totalPrice, goal, trade);

                console.log(end);
                return
            }
        }
    }
}
function getPrice1(event) {
    let name = event.target.name;
    let newClass = event.currentTarget.className.slice(11);
    let size = event.target.value;
    let trade = event.currentTarget;
    trade.classList.add("active");


    console.log(name);
    for (let i = 0; i < products.length; i++) {
        let docName = (products[i].sizes[size].size);
        // console.log(docName);
        if (docName === name) {
            let addPrice = Number((products[i].sizes[size]["add-price"]));
            let biblioClass = document.querySelectorAll(".modal__total_price");
            // console.log(biblioClass);
            let goal1;
            biblioClass.forEach(item => {
                let b = item.className.slice(19);
                // console.log(b);
                if (newClass == b) {
                    goal1 = item;
                }
            })
            console.log(goal1);

            innerPrice = Number(goal1.innerHTML);
            console.log(innerPrice);
            let totalPrice = innerPrice += addPrice;
            end += totalPrice;

            countTotal(totalPrice, goal1, trade)

            console.log(totalPrice);
            return
        }
    }

}
function makeActive(event) {
    // console.log(event)
    let newBtnSize = document.querySelectorAll(".modal__size_item");
    newBtnSize.forEach(item => item.classList.remove("blackBtnModal"));
    event.currentTarget.classList.add("blackBtnModal");
}
let Active1;
function makeActive1(event) {
    // console.log(event)
    Active1 = event.currentTarget;
    event.currentTarget.classList.toggle("blackBtnModal");
    // console.log(Active1)
}
function makeActive3() {
    Active1.classList.toggle("blackBtnModal");
}
let divPrice;
function countTotal(valueFromFirst, divWithPrice, divFromFirst) {

    if (divFromFirst.classList.contains("active")) {
        divPrice = divWithPrice;
        divWithPrice.innerHTML = valueFromFirst;
    }
    // } else {
    //     let div = Number(divPrice.innerHTML);
    //     div - addPrice;
    //     console.log(div)
    //     divPrice.innerHTML = div;
    //     divPrice = 0;
    // }
}

