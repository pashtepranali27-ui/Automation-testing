let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c);

// spread (modern way) - concatenation. (...)
let d = [...a,...b];// ... means -all the element of a all the element of b
console.log(d);