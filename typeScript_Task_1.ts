// Task 1 - Calculator app in TypeScript

let opn: string = "*";

let val1: number = 10;

let val2: number = 15;


 // Perform the requested operation and log the result to the console
 switch (opn) {
    case "+":
      console.log(`${val1} + ${val2} = ${add(val1, val2)}`);
      break;
    case "-":
      console.log(`${val1} - ${val2} = ${subtract(val1, val2)}`);
      break;
    case "*":
      console.log(`${val1} * ${val2} = ${multiply(val1, val2)}`);
      break;
    case "/":
      console.log(`${val1} / ${val2} = ${divide(val1, val2)}`);
      break;
    default:
      console.log("Invalid operation");
      break;
  }
  
// addition
function add(n1: number, n2: number): number {
    return n1+n2;
  }
  
  // subtraction
  function subtract(n1: number,n2: number): number {
    return n1-n2;

  }
  
  // Define a function to perform multiplication
  function multiply(n1: number, n2: number): number {
    return n1 * n2;
  }
  
  // Define a function to perform division
  function divide(n1: number, n2: number): number {
    if (n2 === 0) {
      throw new Error("Can't divide by zero");
    }
    return n1 / n2;
  }




  