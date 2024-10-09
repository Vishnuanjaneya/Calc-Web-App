const display = document.getElementById('display');
let currentInput = '';
let firstOperand = null;
let operator = null;

function appendNumber(number) {
    if (currentInput.includes('.') && number === '.') return;
    currentInput = currentInput.toString() + number.toString();
    updateDisplay();
}

function appendDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    operator = null;
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentInput || '0';
}

function operation(op) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else {
        calculate();
    }
    operator = op;
    currentInput = '';
}

function calculate() {
    let secondOperand = parseFloat(currentInput);
    if (operator && firstOperand !== null) {
        switch (operator) {
            case '+':
                firstOperand += secondOperand;
                break;
            case '-':
                firstOperand -= secondOperand;
                break;
            case '×':
                firstOperand *= secondOperand;
                break;
            case '÷':
                if (secondOperand === 0) {
                    alert("Cannot divide by zero");
                    clearDisplay();
                    return;
                }
                firstOperand /= secondOperand;
                break;
        }
        currentInput = firstOperand.toString();
        operator = null;
        updateDisplay();
    }
}

const toggleThemeButton = document.getElementById('toggle-theme');
const calculator = document.getElementById('calculator');
toggleThemeButton.addEventListener('click', () => {
    calculator.classList.toggle('dark');
    calculator.classList.toggle('light');
});


calculator.classList.add('light');
