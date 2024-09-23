let currentInput = null;
let currentRow = 1;
let listaInputs;

function initializeEvents() {
    const container = document.querySelector('.grid-container');
    const inputs = container.querySelectorAll('input[type="text"]');
    currentInput = inputs[0];
    listaInputs = Array.from(inputs);
    currentInput.focus();
    
    spin(listaInputs.slice(0, 5));
    winGame(listaInputs.slice(0, 5));
    container.addEventListener('input', (event) => {
        const inputElement = event.target;
        if (inputElement.classList.contains('letra')) {
            if (inputElement.value.length === 1) {
                highlightInput(inputElement);
                if (inputElement.id.slice(-1) != 5) {
                    moveToNextInput(inputElement, inputs);
                }
            }
        }
    });

    container.addEventListener('keydown', (event) => {
        if (currentInput.id.slice(-1) == 5 && event.key === 'Enter' && currentInput.value.length === 1 && currentInput.id.charAt(6) != 5) {
            moveToNextInput(currentInput, inputs);
            currentRow++;
        }
    });

    inputs.forEach((input, index) => {
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Backspace' && input.value === '') {
                removeHighlight(input);
                if (input.id.slice(-1) != 1) {
                    moveToPreviousInput(inputs, index);
                }
            }
        });
    });
}

function highlightInput(input) {
    input.style.animation = 'zoom 0.2s ease-in-out, resaltar 0.2s ease-in-out forwards';
}

function removeHighlight(input) {
    input.style.animation = '';
}

function moveToNextInput(input, inputs) {
    const index = Array.from(inputs).indexOf(input);
    const nextInput = inputs[index + 1];
    currentInput.readOnly = true;
    nextInput.readOnly = false;
    nextInput.focus();
    currentInput = nextInput;
}

function moveToPreviousInput(inputs, index) {
    if (index > 0) {
        const previousInput = inputs[index - 1];
        previousInput.value = '';
        previousInput.readOnly = false;
        currentInput.readOnly = true;
        previousInput.focus();
        currentInput = previousInput;
    }
}


function spinYellow(element) {
    document.getElementById(element).style.animation = 'girar-yellow 0.5s ease-in-out forwards';
}
function spinGreen(element) {
    document.getElementById(element).style.animation = 'girar-green 0.5s ease-in-out forwards';
}

function spinGray(element) {
    document.getElementById(element).style.animation = 'girar-gray 0.5s ease-in-out forwards';
}

function jumpInput(input){
    document.getElementById(input).style.animation = 'win-game 1s ease-in-out 2s forwards';
}


function winGame(inputs){
    inputs.forEach((input, index)=> {
        setTimeout(() => {
            jumpInput(input.id);
            console.log(input.id + " salta");
        }, index * 250);
    });
}

function spin(inputs){
    inputs.forEach((input, index) => {
        setTimeout(() => {
            spinGreen(input.id);
        }, index * 250);
    });
}

function girarElementos(inputs, values){
    inputs.forEach((input, index) => {
        setTimeout(() => {
        switch(values[index]){
            case -1:
                spinGray(input.id);
            break;
            case 0:
                spinYellow(input.id);
            break;
            case 1:
                spinGreen(input.id);
            break;
        }
    }, index * 1000);
    });
}

function element_onChange() {

}

document.addEventListener('DOMContentLoaded', initializeEvents);