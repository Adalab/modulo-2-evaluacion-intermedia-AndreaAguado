'use strict';

const input = document.querySelector('.js_input');
const button = document.querySelector('.js_button');
const hint = document.querySelector('.js_hint');

const number = getRandomNumber(100);
console.log(number);

function handleButton () {
    console.log('estoy dentro');
    // const number = getRandomNumber(100);
    // console.log(number);
    console.log(input.value);
    console.log(typeof input.value);
    if (input.value < 1 || input.value > 100){
        hint.innerHTML = 'El número debe estar entre 1 y 100';
    }
    else if (input.value > number) {
        hint.innerHTML = 'Demasiado alto';
    }
    else if (input.value < number){
        hint.innerHTML = 'Demasiado bajo';
    }
    else if (input.value === number){
        hint.innerHTML = 'Has ganado campeona!!!';
    }

}

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

button.addEventListener('click', handleButton);
