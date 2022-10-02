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

const teamImg = document.getElementById("intro");
const groupImgs = document.getElementsByClassName("group");

function imgOn(){
    teamImg.classList.add("background");
    teamImg.setAttribute("style", "background: #2f1b3d;");

    groupImgs.setAttribute("style", "background: #f8f8f8;");
}

function imgOff(){
    teamImg.classList.remove("background");
    teamImg.setAttribute("style", "background-image: url(\"imgs/community/community.jpg\");\n" +
        "    background-position: top;\n" + "    background-size: cover;\n" + "    background-repeat: no-repeat;");

    groupImgs.setAttribute("style", "background: url(\"imgs/groups/bubbles.jpg\");");
}