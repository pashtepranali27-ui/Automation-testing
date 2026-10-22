
let array = [ 1,2,3,4,5]
console.log(array.length);

// push --- add at end

array.push(6);
console.log(array);

// pop --- remove at end
 array.pop();
 console.log(array);

 // shift remove from bigning

 array.shift(0);
  console.log(array);

   // unshift add from bigning
   array.unshift(1);
  console.log(array);

  // splice
   array.splice(3,2);
    console.log(array);
// in case of 0
    array.splice(2,0,33);
    console.log(array);
// in case of 1
    array.splice(2,1,34);
    console.log(array);

    // in case of below
     array.splice(1,2,38,35);
     console.log(array);