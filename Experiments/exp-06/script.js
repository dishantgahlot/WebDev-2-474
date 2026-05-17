let display = document.querySelector(".display")
let input = document.querySelector(".input")
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let btn4 = document.querySelector(".btn4")
let btn5 = document.querySelector(".btn5")

let toggle = 0;
let toggle2 = 0;
let toggle3 = 0;
let originalText = display.innerHTML;

function inputHeading(){

    if(input.value!= ""){
    display.innerHTML = input.value}

}

function changeBackground(){

    if(toggle == 0){

        document.body.style.backgroundColor = "black"
        display.style.color = "white"

        toggle = 1;

    }
    else{

        document.body.style.backgroundColor = "white"
        display.style.color = "black"

        toggle = 0;

    }

}

function increaseSize(){

    if(toggle2 == 0){

        display.style.fontSize = "60px"

        toggle2 = 1;

    }
    else{

        display.style.fontSize = "40px"

        toggle2 = 0;

    }

}

function showHide(){

    if(toggle3 == 0){

        display.classList.add("className1")
        display.classList.remove("className2")

        toggle3 = 1;

    }
    else{

       display.classList.add("className2")
       display.classList.remove("className1")

        toggle3 = 0;

    }

}

function reset(){

    display.innerHTML = originalText
    input.value = ""

}

btn1.addEventListener("click", inputHeading)
btn2.addEventListener("click", changeBackground)
btn3.addEventListener("click", increaseSize)
btn4.addEventListener("click", showHide)
btn5.addEventListener("click", reset)