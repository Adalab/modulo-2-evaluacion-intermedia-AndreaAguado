'use strict';

const input = document.querySelector('.js_input');
const button = document.querySelector('.js_button');
const hint = document.querySelector('.js_hint');

const number = getRandomNumber(100);
console.log(number);

function handleButton () {
    console.log('estoy dentro');
    console.log(input.value);
    const userInput = parseInt(input.value);
    if (userInput < 1 || userInput > 100){
        hint.innerHTML = 'El número debe estar entre 1 y 100';
    }
    else if (userInput > number) {
        hint.innerHTML = 'Demasiado alto';
    }
    else if (userInput < number){
        hint.innerHTML = 'Demasiado bajo';
    }
    else if (userInput === number){
        hint.innerHTML = 'Has ganado campeona!!!';
    }
}

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

button.addEventListener('click', handleButton);
