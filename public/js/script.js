if(window.location.pathname.includes('shirt_maker')){


// SHIRT COLOR

// Black shirt
let black = document.getElementById('black')
black.addEventListener("click", changeBlack);

function changeBlack() {
    shirt = document.getElementById("shirt_canvas");
    shirt.src = "../img/black.jpg"  
}

// White shirt
let white = document.getElementById('white')
white.addEventListener("click", changeWhite);

function changeWhite() {
    shirt = document.getElementById("shirt_canvas");
    shirt.src = "../img/white.jpg"   
}

// Blue shirt
let blue = document.getElementById('blue')
blue.addEventListener("click", changeBlue);

function changeBlue() {
    shirt = document.getElementById("shirt_canvas");
    shirt.src = "../img/blue.jpg"  
}

// Red shirt
let red = document.getElementById('red')
red.addEventListener("click", changeRed);

function changeRed() {
    shirt = document.getElementById("shirt_canvas");
    shirt.src = "../img/red.jpg"  
}

// Purple shirt
let purple = document.getElementById('purple')
purple.addEventListener("click", changePurple);

function changePurple() {
    shirt = document.getElementById("shirt_canvas");
    shirt.src = "../img/purple.jpg"  
}

// Yellow shirt
let yellow = document.getElementById('yellow')
yellow.addEventListener("click", changeYellow);

function changeYellow() {
    shirt = document.getElementById("shirt_canvas");
    shirt.src = "../img/yellow.jpg"  
}

// Green shirt
let green = document.getElementById('green')
green.addEventListener("click", changeGreen);

function changeGreen() {
    shirt = document.getElementById("shirt_canvas");
    shirt.src = "../img/green.jpg"  
}

// TEXT INPUT ON SHIRT
let shirtInput = document.getElementById("textAdd")

shirtInput.addEventListener("click", textOnShirt);

function textOnShirt() {
    let value = document.getElementById('text').value
    document.querySelector(".shirt > h2").innerHTML=value
}

// SHIRT OPSLAAN NAAR LOCALSTORAGE


}