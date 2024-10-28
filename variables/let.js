// let is a keyword used to declare a block-scoped variable. 
// Unlike var, variables declared with let are confined to the block (like loops or functions) in which they are defined, 
// preventing issues with variable re-declaration and unexpected behavior outside the block.

let id, firstName;

// uninitialized variable's value is undefined by default
console.log("ID: " + id);
console.log("Name: " + firstName);

id = 1;
firstName = "bishal";

console.log("ID: " + id);
console.log("Name: " + firstName);
