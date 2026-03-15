let number1 = '';
let number2 = '';
let operator;

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

function operate(operator, number1, number2) {
    if (operator === '+') {
        add(operator, number1, number2);
    } else if (operator === '-') {
        subtract(operator, number1, number2);
    } else if (operator === 'x') {
        subtract(operator, number1, number2);
    } else if (operator === '%') {
        subtract(operator, number1, number2);
    }
}