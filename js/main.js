'use strict';

const input = document.querySelector('.js_input');
const button = document.querySelector('.js_button');

function handleButton () {
    console.log('estoy dentro');
    if (input.innerHTML < 1 || input.innerHTML > 100){
        console.log('numero invalido');
    }
}

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

button.addEventListener('click', handleButton);
