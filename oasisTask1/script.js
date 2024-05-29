let display = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        display.textContent = '0';
    } else {
        display.textContent = currentInput;
    }
}

function appendNumber(number) {
    if (currentInput === '0' && number === 0) return;
    currentInput += number;
    display.textContent = currentInput;
}

function appendOperator(op) {
    if (currentInput === '' && op === '-') {
        currentInput = '-';
        display.textContent = currentInput;
        return;
    }
    currentInput += ' ' + op + ' ';
    display.textContent = currentInput;
}

function appendDot() {
    if (currentInput === '' || /[\d\.]$/.test(currentInput)) {
        currentInput += '.';
        display.textContent = currentInput;
    }
}

function appendParenthesis(paren) {
    currentInput += paren;
    display.textContent = currentInput;
}

function calculate() {
    try {
        let result = eval(currentInput.replace(/[^-()\d/*+.]/g, ''));
        display.textContent = result;
        currentInput = result.toString();
    } catch (e) {
        display.textContent = 'Error';
        currentInput = '';
    }
}
