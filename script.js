//Basic math operators

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2)  {
    if (num2 != 0) 
        return num1 / num2
    else
        return "Division by 0"
}

//Calls the proper function based on the operator used
function operate(operator, num1, num2) {
    if (operator == '+') {
        return add(num1,num2)
    }
    if (operator == '-') {
        return subtract(num1, num2)
    }
    if (operator == '*') {
        return multiply(num1, num2)
    }
    if (operator == '/') {
        return divide(num1, num2)
    }
}

//Display buttons input on UI
let display = document.querySelector('#display')

let one = document.querySelector('#one')

one.onclick = () => display.textContent += 1

let two = document.querySelector('#two').onclick = () => display.textContent += 2

let three = document.querySelector('#three')

three.onclick = () => display.textContent += 3

let four = document.querySelector('#four')

four.onclick = () => display.textContent += 4

let five = document.querySelector('#five')

five.onclick = () => display.textContent += 5

let six = document.querySelector('#six')

six.onclick = () => display.textContent += 6

let seven = document.querySelector('#seven')

seven.onclick = () => display.textContent += 7

let eight = document.querySelector('#eight')

eight.onclick = () => display.textContent += 8

let nine = document.querySelector('#nine')

nine.onclick = () => display.textContent += 9

let zero = document.querySelector('#zero')

zero.onclick = () => display.textContent += 0

let clear = document.querySelector('#clear')

clear.onclick = () => display.textContent = ''

//Starts claculation
let plus = document.querySelector('#plus').addEventListener('click', function(e) {
    let operator = '+'
    let num1 = parseInt(display.textContent)
    console.log(operator)
    console.log(num1)
})

let minus = document.querySelector('#minus')

minus.addEventListener('click', function(e) {
    return '-'
})

let times = document.querySelector('#times')

times.addEventListener('click', function(e) {
    return '*'
})

let division = document.querySelector('#division')

division.addEventListener('click', function(e) {
    return '/'
})

let equals = document.querySelector('#equals').onclick

let operators = document.querySelector('.operators')

operators.onclick = () => console.log('True')