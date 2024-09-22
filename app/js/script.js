let currentInput = null;

function initializeEvents() {
    const container = document.querySelector('.grid-container');
    const inputs = container.querySelectorAll('input[type="text"]');
    currentInput = inputs[0];
    currentInput.focus();

    container.addEventListener('input', (event) => {
        const inputElement = event.target;
        if (inputElement.classList.contains('letra')) {
            if (inputElement.value.length === 1) {
                highlightInput(inputElement);
                moveToNextInput(inputElement, inputs);
            }
            if(inputElement.value === ''){
                removeHighlight(inputElement);
            }
        }
    });

    inputs.forEach((input, index) => {
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Backspace' && input.value === '') {
                removeHighlight(input);
                moveToPreviousInput(input, inputs, index);
            }
        });
    });
}

function highlightInput(input) {
    input.classList.add('resaltar');
    input.style.animation = 'zoom 0.3s ease-in-out';
}

function removeHighlight(input) {
    input.classList.remove('resaltar');
    input.style.animation = '';
}

function moveToNextInput(input, inputs) {
    const index = Array.from(inputs).indexOf(input);
    const nextInput = inputs[index + 1];
    currentInput.disabled = true;
    nextInput.disabled = false;
    nextInput.focus();
    currentInput = nextInput;
}

function moveToPreviousInput(input, inputs, index) {
    if (index > 0) {
        const previousInput = inputs[index - 1];
        previousInput.value = '';
        previousInput.disabled = false;
        currentInput.disabled = true;
        previousInput.focus();
        currentInput = previousInput;
    }
}


function spinYellow(elmentos) {
    elmentos.forEach(element => {
        document.getElementById(element).style.animation = 'girar-yellow 1s ease-in-out forwards';
    });
}
function spinGreen(elmentos) {
    elmentos.forEach(element => {
        document.getElementById(element).style.animation = 'girar-green 1s ease-in-out forwards';
    });
}

function spinGray(elmentos) {
    elmentos.forEach(element => {
        document.getElementById(element).style.animation = 'girar-gray 1s ease-in-out forwards';
    });
}

function element_onChange() {

}

document.addEventListener('DOMContentLoaded', initializeEvents);