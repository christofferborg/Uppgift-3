// Declaration of HTML-elements.

const knapp = document.querySelector('#button');
const body = document.querySelector('body')

// Event listeners

knapp.addEventListener(
    'click', changeColor
);

// Functions

function changeColor(){
 body.style.background = 'red';
}