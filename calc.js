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
let operator;

function operation(numA, numB, operator) {
    if (operator === '+') return sum(numA, numB)
    if (operator === '-') return subtract(numA,numB)
    if (operator === '*') return multiply(numA, numB)
    if (operator === '/') return divide(numA, numB)

    operator !== '+' || operator !== '-' || 
    operator !== '*' || operator !== '/' ? console.log('Not an operator') : null
}