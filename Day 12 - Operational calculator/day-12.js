// Operational calculator

console.log("==== Operational calculator ====");

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

let userOperation = prompt("Enter the operation (add,subtract,multiply,divide)");
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

console.log("\nOperation :", userOperation);
console.log("First number :", firstNum);
console.log("Second number :", secondNum);

if (operation) {
    let result = calculator(operation, firstNum, secondNum);
    console.log("\nResult :", result);
}

console.log("\nThanks for using😊")
console.log("Reload the page to use again🔄️")