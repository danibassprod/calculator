function sum(a, b) {
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

let numA;
let numB;
let operator = ''
let operation = '';
let displayNumb = '';

function operate(a, b, op) {
    if (op === '') return 'ERROR'
    if (op === '+') return sum(a, b)
    if (op === '-') return subtract(a, b)
    if (op === '*') return multiply(a, b)
    if (op === '/') return divide(a, b)
}

const display = document.querySelector('.result');
display.textContent = displayNumb;

const numbers = document.querySelectorAll('#number');
numbers.forEach(num => num.addEventListener('click', function(){
    operation += this.textContent;
    displayNumb += this.textContent; 
    display.textContent = displayNumb;
}))

const operators = document.querySelectorAll('.op')
operators.forEach(op => op.addEventListener('click', function(){
    if (operator !== '') getResult()
    operator = this.textContent;
    operation += this.textContent;
    displayNumb = '';
}))

const equals = document.querySelector('.equals')
equals.addEventListener('click', getResult)

function getResult(){
    let arr = operation.split(operator)
    numA = +arr[0]
    numB = +arr[1]
    let finalResult = operate(numA, numB, operator)
    operation = finalResult;
    display.textContent = finalResult.toString()
}