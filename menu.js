//MENU

const primaryMenu = document.querySelector('.primary-menu');
const menuToggle = document.querySelector('.accessibility');

menuToggle.addEventListener('click', ()=>{
    const visibility=primaryMenu.getAttribute('data-visible');

    if(visibility === "false"){
        primaryMenu.setAttribute('data-visible', true);
        menuToggle.setAttribute('aria-expanded', true);
    } else if(visibility === "true"){
        primaryMenu.setAttribute('data-visible', false);
        menuToggle.setAttribute('aria-expanded', false);
    }
});

//FONT-SIZE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const sizeSwitch = document.getElementById('input-size-switch');

sizeSwitch.addEventListener('click',checkMode);

function checkMode(){
    if(sizeSwitch.checked){
        biggerFontOn();
    } else {
        biggerFontOff();
    }
}

const text = document.querySelectorAll("main");

function biggerFontOn(){
    document.body.classList.add("bigger-font");
    text.classList.add("bigger-font");
}

function biggerFontOff(){
    document.body.classList.remove("bigger-font");
    text.classList.remove("bigger-font");
}

//FONT-STANDARD !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const fontSwitch = document.getElementById('input-font-switch');

fontSwitch.addEventListener('click',checkMode2);

function checkMode2(){
    if(fontSwitch.checked){
        standardFontOn();
    } else {
        standardFontOff();
    }
}

function standardFontOn(){
    document.body.classList.add("standard-font");
}

function standardFontOff(){
    document.body.classList.remove("standard-font");
}



//BACKGROUND !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const imgSwitch = document.getElementById('input-img-switch');

imgSwitch.addEventListener('click',checkMode3);

function checkMode3(){
    if(imgSwitch.checked){
        imgOn();
    } else {
        imgOff();
    }
}

const headerImg = document.getElementById("home-header");
const aboutImg = document.getElementById("about");

function imgOn(){
    headerImg.classList.add("background");
    headerImg.setAttribute("style", "background: #ec5e86;");

    aboutImg.classList.add("background");
    aboutImg.setAttribute("style", "background: #ec5e86;");
}

function imgOff(){
    headerImg.classList.remove("background");
    headerImg.setAttribute("style", "background-image: url(\"imgs/home_background.jpg\");\n" +
        "    background-size: cover;\n" + "    background-repeat: no-repeat;\n" + "    background-position: center;");

    aboutImg.classList.remove("background");
    aboutImg.setAttribute("style", "background-image: url(\"imgs/about_us.jpg\");\n" +
        "    background-size: cover;\n" + "    background-repeat: no-repeat;\n" + "    background-position: center;");
}