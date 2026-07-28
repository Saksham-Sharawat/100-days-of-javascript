// Operational calculator

console.log("Operational calculator");

// calculation function 

function add(num1, num2) {
    return (num1 + num2);
}

function subtract(num1, num2) {
    return (num1 - num2);
}

function multiply(num1, num2) {
    return (num1 * num2);
}

function divide(num1, num2) {
    return (num1 / num2);
}

// main calculator

function calculator(operation, num1, num2) {
    return operation(num1, num2);
}

let userOperation = prompt("Enter the operation");
let firstNum = Number(prompt("Enter the first number"));
let secondNum = Number(prompt("Enter the second number"));

let operation;

switch (userOperation) {
    case "add":
        operation = add;
        break;

    case "subtract":
        operation = subtract;
        break;

    case "multiply":
        operation = multiply;
        break;

    case "divide":
        operation = divide;
        break;

    default:
    console.log("Invalid operation");
}

if (operation) {
    let result = calculator(operation, firstNum, secondNum);
    console.log(result);
}