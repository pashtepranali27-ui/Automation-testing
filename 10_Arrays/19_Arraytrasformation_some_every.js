// Map and Filters


// every vs some

// //every — ALL must pass//like && operators
console.log([80, 90, 85].every(i => i >= 70));
console.log([80, 60, 85].every(i => i >= 70));


// // some — AT LEAST ONE must pass like || operator
console.log([80, 60, 85].some(s => s < 70));//true
console.log([80, 90, 85].some(s => s < 70)); // false