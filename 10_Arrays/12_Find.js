
let nums = [35, 20, 34, 78];

let result = nums.find(i=> i>20);
console.log(result);

// find index
let index = nums.findIndex(i=> i>20);
console.log(index);

 let firstIndex = nums.findLast(i=> i>20);
 console.log(firstIndex);

let lastindex =nums.findLastIndex(i=>  i>20);
console.log(lastindex);







//  onst value = [35, 20, 34, 78];

// // Find the first value greater than 20
// const result = value.find(temp => temp > 20);
// console.log("First matching value:", result); // 35

// // Find the index of the first value greater than 20
// const firstIndex = value.findIndex(temp => temp > 20);
// console.log("First matching index:", firstIndex); // 0

// // Find the index of the last value less than 35
// const lastIndex = value.findLastIndex(temp => temp < 35);
// console.log("Last matching index:", lastIndex); // 2c