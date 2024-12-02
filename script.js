let currentInput = "";
let previousInput = "";
let operator = "";

// Функция для обновления дисплея
function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

// Добавление чисел на экран
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

// Функция для очистки
function clearInput() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay();
}

// Функция для работы с операциями
function setOperator(op) {
    if (currentInput === "") return;
    if (previousInput !== "") {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

// Функция для вычислений
function calculatePercentage() {
    if (currentInput === "") return;
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}

// Функция для вычислений
function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (operator === "+") {
        result = prev + current;
    } else if (operator === "-") {
        result = prev - current;
    } else if (operator === "*") {
        result = prev * current;
    } else if (operator === "/") {
        if (current === 0) {
            result = "Error";
        } else {
            result = prev / current;
        }
    }

    currentInput = result.toString();
    operator = "";
    previousInput = "";
    updateDisplay();
}

// Обработчики событий
document.getElementById("btn0").addEventListener("click", () => appendNumber("0"));
document.getElementById("btn1").addEventListener("click", () => appendNumber("1"));
document.getElementById("btn2").addEventListener("click", () => appendNumber("2"));
document.getElementById("btn3").addEventListener("click", () => appendNumber("3"));
document.getElementById("btn4").addEventListener("click", () => appendNumber("4"));
document.getElementById("btn5").addEventListener("click", () => appendNumber("5"));
document.getElementById("btn6").addEventListener("click", () => appendNumber("6"));
document.getElementById("btn7").addEventListener("click", () => appendNumber("7"));
document.getElementById("btn8").addEventListener("click", () => appendNumber("8"));
document.getElementById("btn9").addEventListener("click", () => appendNumber("9"));

document.getElementById("clear").addEventListener("click", clearInput);

document.getElementById("add").addEventListener("click", () => setOperator("+"));
document.getElementById("subtract").addEventListener("click", () => setOperator("-"));
document.getElementById("multiply").addEventListener("click", () => setOperator("*"));
document.getElementById("divide").addEventListener("click", () => setOperator("/"));

document.getElementById("percent").addEventListener("click", calculatePercentage);

document.getElementById("equals").addEventListener("click", calculate);
