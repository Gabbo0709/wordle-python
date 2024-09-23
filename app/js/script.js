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
                if (inputElement.id.slice(-1) != 5) {
                    moveToNextInput(inputElement, inputs);
                }
            }
        }
    });

    container.addEventListener('keydown', (event) => {
        if (currentInput.id.slice(-1) == 5 && event.key === 'Enter' && currentInput.value.length === 1 && currentInput.id.charAt(6) != 5) {
            moveToNextInput(currentInput, inputs);
        }
    });

    inputs.forEach((input, index) => {
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Backspace' && input.value === '') {
                removeHighlight(input);
                if (input.id.slice(-1) != 1) {
                    moveToPreviousInput(input, inputs, index);
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

function moveToPreviousInput(input, inputs, index) {
    if (index > 0) {
        const previousInput = inputs[index - 1];
        previousInput.value = '';
        previousInput.readOnly = false;
        currentInput.readOnly = true;
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