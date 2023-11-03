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
let operator = '';
let displayNumb = '';

function operation(a, b, op) {
    if (operator === '') return 'ERROR'
    if (operator === '+') return sum(a, b)
    if (operator === '-') return subtract(a,b)
    if (operator === '*') return multiply(a, b)
    if (operator === '/') return divide(a, b)
}

const results = document.querySelector('.result')

const acBtn = document.querySelector('.ac')
acBtn.addEventListener('click', function(){
    displayNumb = ''
    results.textContent = ''
})

const delBtn = document.querySelector('.del')
delBtn.addEventListener('click', function(){
    let arr = displayNumb.split('')
    arr.pop()
    displayNumb = arr.join('')
    results.textContent = displayNumb;
})

const operators = document.querySelectorAll('.op')
operators.forEach(op => op.addEventListener('click', function(){
    console.log(this.textContent)
    operator = this.textContent;
}))

const equals = document.querySelector('.equals')
equals.addEventListener('click', function(){
    let arr = displayNumb.split(operator)
    numA = +arr[0]
    numB = +arr[1]
    displayNumb = operation(numA, numB, operator)
    displayNumb = displayNumb.toString()
    results.textContent = displayNumb;
})

const num = document.querySelectorAll('#result')
num.forEach(x => x.addEventListener('click', function(){
    displayNumb += this.textContent;
    results.textContent = displayNumb;
}))
