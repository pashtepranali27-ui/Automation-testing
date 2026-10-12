
console.log("" == 0); // true, bcz here "" is empty string and it is equal to 0.
console.log("0" == 0); // false, bcz here "0" is string and 0 is number, so they are not same data type, so it will return false.
console.log("" == "0"); // false, bcz here "" is empty string and "0" is string, so they are not same value, so it will return false.

// transivity broken


// Remember for life this
console.log("" === 0); // false, bcz here "" is empty string and 0 is number, so they are not same data type, so it will return false.
console.log("0" === 0); // false
console.log("" === "0"); // false


