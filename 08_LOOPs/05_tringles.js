
const prompt = require('prompt-sync')();

let a = Number(prompt("Enter side a: "));
let b = Number(prompt("Enter side b: "));
let c = Number(prompt("Enter side c: "));

if (a === b && b === c) {
    console.log("Equilateral");
} else if (a === b || b === c || a === c) {
    console.log("Isosceles");
} else {
    console.log("Scalene");
}
