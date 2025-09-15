// Declaration of HTML-elements.

const knapp = document.querySelector('#button');
const text = document.querySelector('h1')

// Event listeners

knapp.addEventListener(
    'click', changeColor
);

// Functions

function changeColor(){
 text.textContent = 'Goodbye World!'
}