const displayE1 = document.querySelector('.display1');
const displayE2 = document.querySelector('.display2');
const tempresultE1 = document.querySelector('.temp-result');
const numbersE1 = document.querySelectorAll('.number');
const operationE1 = document.querySelectorAll('.operation');
const equalE1 = document.querySelector('.equal');
const clearE1 = document.querySelector('.all-clear');
const clearLastE1 = document.querySelector('.last_value-clear');

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;
numbersE1.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot) {
            return;
        }
        dis2Num += e.target.innerText;
        displayE2.innerText = dis2Num;
    })
});

operationE1.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if (!dis2Num) result;
        haveDot = false;
        const operationName = e.target.innerText;
        if (dis1Num && dis2Num && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
        console.log(result);
    })
});

function clearVar(name = '') {
    dis1Num += dis2Num + '' + name + '';
    displayE1.innerText = dis1Num;
    displayE2.innerText = '';
    dis2Num = '';
    tempresultE1.innerText = result;

}

function mathOperation() {
    if (lastOperation === 'X') {
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(dis2Num);
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(dis2Num);
    } else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(dis2Num);
    } else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(dis2Num);
    }
}


equalE1.addEventListener('click', (e) => {
    if (!dis1Num || !dis2Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    displayE1.innerText = result;
    tempresultE1.innerText = '';
    dis2Num = result;
    dis1Num = '';

});

clearE1.addEventListener('click', (e) => {
    displayE1.innerText = '0';
    displayE2.innerText = '0';
    tempresultE1.innerText = '0';
    dis2Num = '';
    dis1Num = '';
    result = '';

});

clearLastE1.addEventListener('click', (e) => {
    displayE2.innerText = '';
    dis2Num = '';
});

window.addEventListener('keydown', (e) => {
    if (
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' 
    ) {
        clickButtonE1(e.key);
    }else if (
        e.key === '/' ||
        e.key === '%' ||
        e.key === '+' ||
        e.key === '-' 
        
    ) {
        clickOperation(e.key);
    }
    else if (e.key === '*'){
        clickOperation(X);
    }
    else if (e.key === '=' || e.key === 'Enter'){
        clickequal();
    }
    else if (e.key === 'Backspace'){
        clearOperation();
    }
    


});

function clickButtonE1(key) {
    numbersE1.forEach(button => {
        if (button.innerText === key) {
            button.click();
        }
    })
}

function clickOperation(key) {
    operationE1.forEach(button => {
        if (button.innerText === key) {
            button.click();
        }
    })
}

function clickequal(){
    equalE1.click();
}

function clearOperation(){
    clearE1.click();
}