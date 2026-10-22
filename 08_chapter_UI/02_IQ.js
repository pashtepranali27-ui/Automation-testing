//ry writing a JavaScript program that:
//1. Takes two numbers from the user.
//2. Converts both inputs into numbers using Number().
//3. Prints their sum.

const prompt = require("prompt-sync")();

let a = Number(prompt("Enter number"));
let b = Number(prompt("Enter 2nd number"));

let sum =(a + b);
console.log(sum);