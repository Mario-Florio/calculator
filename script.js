//Global variables to keep track of runniong values
let num1 = 0
let num2 = 0
let product
let operator

//Basic math operators
function add(num1, num2) {
    product = parseFloat(num1) + parseFloat(num2)
    if (product.toString().length > 7 === true) {
        console.log('Product to big for screen\nProduct = ' + product)
        product = 'TOO BIG'
    }
    if (product.toString().includes('.') === true) {
        product = product.toFixed(5)
    }
}

function subtract(num1, num2) {
    product = num1 - num2
    if (product.toString().includes('.') === false && product.toString().length > 7 === true) {
        console.log('Product to big for screen\nProduct = ' + product)
        product = 'TOO BIG'
    }
    if (product.toString().includes('.') === true) {
        product = product.toFixed(5)
    }
}

function multiply(num1, num2) {
    product = num1 * num2
    if (product.toString().includes('.') === false && product.toString().length > 7 === true) {
        console.log('Product to big for screen\nProduct = ' + product)
        product = 'TOO BIG'
    }
    if (product.toString().includes('.') === true) {
        product = product.toFixed(5)
    }
}

function divide(num1, num2)  {
        product = num1 / num2
    if (num2 === 0) {
        product = 'ERROR'
    }
    if (product.toString().includes('.') === true) {
        product = product.toFixed(5)
    }
    if (product.toString().length > 7 === true) {
        console.log('Product to big for screen\nProduct = ' + product)
        product = 'TOO BIG'
    }
    
}

//Calls the proper function based on the operator used
function operate(operator, num1, num2) {
    parseFloat(num1, num2)
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
//

let display = document.querySelector('#display')

//Numbers display on screen when clicked 
//and effect the value of num1 & num2 depending on context
let numbers = document.querySelectorAll('.numbers')

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', () => {
        if (operator == undefined && num1.toString().length < 7) {
            num1 += numbers[i].textContent
            display.textContent = num1.slice(1)
        }
        if (typeof operator == 'string' && num2.toString().length < 7) {
            num2 += numbers[i].textContent
            display.textContent = num2.slice(1)
        }
    })
}

//Zero behaves similarly to other numbers, but only displays once if called first
let zero = document.querySelector('#zero')

zero.addEventListener('click', (e) => {
    /*if (operator === undefined && num1 == 0) {
        //display.textContent = 0
    } may be able to remove from code*/
    
    if (operator === undefined && num1.toString().length < 6) {
        num1 += 0
        display.textContent = num1
        if (num1 == '0') {
            display.textContent = num1
            } else {
                display.textContent = num1.slice(1)
            }
    } 
    
    /*if (typeof operator == 'string' && num2 == 0) {
        display.textContent = 0
    } may be able to remove from code*/

    if (typeof operator == 'string' && num2.toString().length < 6) {
        num2 += 0
        if (num2 == '0') {
            display.textContent = num2
            } else {
                display.textContent = num2.slice(1)
            }
    }
})

//Clear button clears screen and running values
let clear = document.querySelector('#clear')

clear.addEventListener('click', () => {
    display.textContent = ''
    num1 = 0
    num2 = 0
    operator = undefined
    product = 0
})

/*Operator buttons change the operator when num2 is at default value 
but also acts as an equal button if num1 & num2 are both plugged in*/
let plus = document.querySelector('#plus')

plus.addEventListener('click', () => {
    if (typeof num2 == 'string') {
        operate(operator, num1, num2)
        display.textContent = product
        console.log('num1: ' + num1)
        console.log('operator:' + operator)
        console.log('num2: ' + num2)
        console.log('product: ' + product)
        num1 = product
        num2 = 0
    }
    operator = '+'
})

let minus = document.querySelector('#minus')

minus.addEventListener('click', () => {
    if (typeof num2 == 'string') {
        operate(operator, num1, num2)
        display.textContent = product
        console.log('num1: ' + num1)
        console.log('operator:' + operator)
        console.log('num2: ' + num2)
        console.log('product: ' + product)
        num1 = product
        num2 = 0
    }
    operator = '-'
})

let times = document.querySelector('#times')

times.addEventListener('click', () => {
    if (typeof num2 == 'string') {
        operate(operator, num1, num2)
        display.textContent = product
        console.log('num1: ' + num1)
        console.log('operator:' + operator)
        console.log('num2: ' + num2)
        console.log('product: ' + product)
        num1 = product
        num2 = 0
    }
    operator = '*'
})

let division = document.querySelector('#division')

division.addEventListener('click', () => {
    if (typeof num2 == 'string') {
        operate(operator, num1, num2)
        display.textContent = product
        console.log('num1: ' + num1)
        console.log('operator:' + operator)
        console.log('num2: ' + num2)
        console.log('product: ' + product)
        num1 = product
        num2 = 0
    }
    operator = '/'
})

/*Equal button calls 'operate()' function, brings 'product' to display, 
and changes num1's value to the that of the product 
and num2's value to 0 when clicked*/
let equals = document.querySelector('#equals')

equals.addEventListener('click', () => {
    operate(operator, num1, num2)
    display.textContent = product
    console.log('num1: ' + num1)
    console.log('operator:' + operator)
    console.log('num2: ' + num2)
    console.log('product: ' + product)
    num1 = product
    num2 = 0
})
//

let decimal = document.querySelector('#decimal')

decimal.addEventListener('click', () => {
        if (operator === undefined && num1.toString().includes('.') === false) {
            num1 += '.'
            display.textContent = num1.slice(1)
        }
        if (typeof operator == 'string' && num2.toString().includes('.') === false) {
            num2 += '.'
            display.textContent = num2.slice(1)
        }
})

let deleteButton = document.querySelector('#delete')

deleteButton.addEventListener('click', () => {
    //condition finds if num1 is currently active
   if (operator == undefined) {
    display.textContent = display.textContent.slice(0, -1)
    num1 = num1.slice(0, -1)
   } 
   //condition finds if num2 is currently active
   else if (typeof operator == 'string' && typeof num2 == 'string') {
    display.textContent = display.textContent.slice(0, -1)
    num2 = num2.slice(0, -1)
   }
})

