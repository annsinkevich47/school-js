window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navigation'),
        menuItem = document.querySelectorAll('.navigation__ref'),
        hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('navigation_active');

        if(hamburger.classList.contains('header__hamburger_active')) {
            document.getElementById("header").style.position = "relative";
            document.getElementById("cont").style.position = "fixed";
            document.body.style.overflow = "hidden";           
        } else {
            document.getElementById("header").style.position = "relative";
            document.getElementById("cont").style.position = "static";
            document.body.style.overflow = "visible";
        }
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('navigation_active');
            
            if(hamburger.classList.contains('header__hamburger_active')) {
                document.getElementById("header").style.position = "relative";
                document.getElementById("cont").style.position = "fixed";
                document.body.style.overflow = "hidden";    
            } else {
                document.getElementById("header").style.position = "static";
                document.getElementById("cont").style.position = "static";
                document.body.style.overflow = "visible";
            }
        })
    });

})

