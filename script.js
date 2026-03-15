const SCREEN = document.querySelector('.screen');
const KEYS = document.querySelectorAll('.key');
const OPERATORS = document.querySelectorAll('.operator');

let number1 = '';
let number2 = '';
let operator;

let input = '';
let result;

function add(a, b) { 
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate() {
    if (operator === '+') {
        return add(Number(number1), Number(number2));
    } else if (operator === '-') {
        return subtract(Number(number1), Number(number2));
    } else if (operator === 'x') {
        return multiply(Number(number1), Number(number2));
    } else if (operator === '/') {
        return divide(Number(number1), Number(number2));
    }
}

function evaluate() {
    // set result
    result = operate();
    // update screen
    SCREEN.textContent = result;
}

KEYS.forEach(key => {
    key.addEventListener('click', (e) => {
        
        // update input
        input += key.textContent;

        // update screen
        SCREEN.textContent = input;

    })
})

OPERATORS.forEach(op => {
    op.addEventListener('click', (e) => {
        if (!op.textContent === '=') {
            if (number1 !== '' && number2 !== '') {
                // calculate previous numbers first
                evaluate();
                // set new operator
                operator = op.textContent;
            }
            if (number1 !== '' && number2 === '') {
                // store input
                number1 = input;
                // set new operator
                operator = op.textContent;
                // reset input
                input = '';
            } else if (number2 !== '' && number1 === '') {
                // store input
                number2 = input;
                // set new operator
                operator = op.textContent;
                // reset input
                input = '';
            }
        }      
    })
})