const keyElements = document.querySelectorAll('.key');
const operatorElements = document.querySelectorAll('.operator');
const screenCurrentElement = document.querySelector('.screen__current');
const screenBeforeElem = document.querySelector('.screen__before');

let prevNum = '';
let currentNum = '';
let operator = '';


function calculate() {
    const firstNum = Number(prevNum);
    const secondNum = Number(currentNum);

    if (operator === '+') {
        return firstNum + secondNum;
    } else if (operator === '-') {
        return firstNum - secondNum;
    } else if (operator === 'x') {
        return firstNum * secondNum;
    } else if (operator === '/') {
        return firstNum / secondNum;
    }
}

keyElements.forEach(key => {
    key.addEventListener('click', (e) => {
        // prevent text going off and making parent elem bigger
        if (currentNum.length < 20) {
            currentNum += e.target.textContent;
            screenCurrentElement.textContent = currentNum;
        }
    })
})

operatorElements.forEach(op => {
    op.addEventListener('click', (e) => {
        // calculate prev and current if both exist
        if (prevNum !== '') {
            currentNum = calculate();
            screenCurrentElement.textContent = currentNum
        }


        operator = op.textContent;
        prevNum = currentNum;
        currentNum = '';

        // update screen__before textContent
        screenBeforeElem.textContent = prevNum + " " + operator
    })
})