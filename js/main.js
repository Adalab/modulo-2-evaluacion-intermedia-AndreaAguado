'use strict';

const input = document.querySelector('.js_input');
const button = document.querySelector('.js_button');
const hint = document.querySelector('.js_hint');
const resetButton = document.querySelector('.js_reset');
const page = document.querySelector('.js_body');

let number = getRandomNumber(100);
console.log('Random number generated: ' + number);

const attempts = document.querySelector('.js_attempts');
let cont = 0;

function handleButton (event) {
    event.preventDefault();
    feedbackPainter();
}

function feedbackPainter(){
    if(input.value === ''){
        hint.innerHTML = 'Por favor introduce un número entre 1 y 100';
    }
    else {
        console.log('User number: ' + input.value);
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
        attempsCounter();
    }
}

function attempsCounter() {
    cont ++;
    attempts.innerHTML = 'Número de intentos: ' + cont;
}

function handleReset(ev){
    ev.preventDefault();
    cont = -1;
    input.value = '';
    number = getRandomNumber(100);
    console.log('Random number generated: ' + number);
    hint.innerHTML = 'Pista: Escribe el número y dale a Prueba'
    attempsCounter();
}

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function handleEnter(event){
    if (event.key === ' '){
        feedbackPainter();
    }
}

button.addEventListener('click', handleButton);
resetButton.addEventListener('click',handleReset);
page.addEventListener('keyup',handleEnter)