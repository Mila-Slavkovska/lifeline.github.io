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

//BACKGROUND

const imgSwitch = document.getElementById('input-img-switch');

imgSwitch.addEventListener('click',checkMode3);

function checkMode3(){
    if(imgSwitch.checked){
        imgOn();
    } else {
        imgOff();
    }
}

const articleImg = document.getElementById("bubble");

function imgOn(){
    articleImg.classList.add("background");
    articleImg.setAttribute("style", "background: #f1f1f1;");
}

function imgOff(){
    articleImg.classList.remove("background");
    articleImg.setAttribute("style", "background-image: url(\"imgs/groups/bubbles.jpg\");");
}