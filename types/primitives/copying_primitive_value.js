// primitives are copied by thier values

let firstNumber = 10;

let secondNumber = firstNumber; // the assigned values are independent 

firstNumber += 5;

console.log("First number : " + firstNumber);
console.log("Last number : " + secondNumber);