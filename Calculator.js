let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = undefined;

function appendNumber(number) {
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function updateDisplay() {
    display.value = currentOperand;
}

function setOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculate() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentOperand = computation;
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

// Unique Feature: Currency Converter
function convertCurrency() {
    let amount = parseFloat(currentOperand);
    if (isNaN(amount)) return;
    let fromCurrency = prompt("Enter the currency code you want to convert from (e.g., USD):").toUpperCase();
    let toCurrency = prompt("Enter the currency code you want to convert to (e.g., EUR):").toUpperCase();
    let rate = getConversionRate(fromCurrency, toCurrency);
    let convertedAmount = amount * rate;
    alert(`Converted amount: ${convertedAmount.toFixed(2)} ${toCurrency}`);
    currentOperand = '';
    updateDisplay();
}

// Function to get conversion rate (placeholder)
function getConversionRate(fromCurrency, toCurrency) {
    // Placeholder conversion rates
    const rates = {
        'USD': { 'EUR': 0.85, 'GBP': 0.75, 'INR': 74.0 },
        'EUR': { 'USD': 1.18, 'GBP': 0.88, 'INR': 87.0 },
        'GBP': { 'USD': 1.33, 'EUR': 1.14, 'INR': 99.0 },
        'INR': { 'USD': 0.013, 'EUR': 0.011, 'GBP': 0.010 }
    };
    return rates[fromCurrency][toCurrency] || 1;
}
