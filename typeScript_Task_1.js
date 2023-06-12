// Task 1 - Calculator app in TypeScript
var opn = "*";
var val1 = 10;
var val2 = 15;
// Perform the requested operation and log the result to the console
switch (opn) {
    case "+":
        console.log("".concat(val1, " + ").concat(val2, " = ").concat(add(val1, val2)));
        break;
    case "-":
        console.log("".concat(val1, " - ").concat(val2, " = ").concat(subtract(val1, val2)));
        break;
    case "*":
        console.log("".concat(val1, " * ").concat(val2, " = ").concat(multiply(val1, val2)));
        break;
    case "/":
        console.log("".concat(val1, " / ").concat(val2, " = ").concat(divide(val1, val2)));
        break;
    default:
        console.log("Invalid operation");
        break;
}
// addition
function add(n1, n2) {
    return n1 + n2;
}
// subtraction
function subtract(n1, n2) {
    return n1 - n2;
}
// Define a function to perform multiplication
function multiply(n1, n2) {
    return n1 * n2;
}
// Define a function to perform division
function divide(n1, n2) {
    if (n2 === 0) {
        throw new Error("Can't divide by zero");
    }
    return n1 / n2;
}
