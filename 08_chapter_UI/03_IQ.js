
// Practice 2: Calculate the average of two numbers
// Your task: Write a JavaScript program that:
// 1. Takes the first number as input.
// 2. Takes the second number as input.
// 3. Calculates their average.
// 4. Displays the result.

const prompt = require("prompt-sync")();

let b  =  Number(prompt(" enter 1st number"));
let a =  Number(prompt( "enter 2nd number"));

let Average = ((a+b)/2);
console.log(Average);
