let tests =["login", "check", " insert"];

for(let i = 0; i < tests.length; i++){
     console.log(tests[i]);
}

console.log("---------below (for of) ------------------------");

for(let x of tests){
    console.log(x);
}
console.log("-------- for each-------------------------");

// forEach (no return value)
tests.forEach((test, index) => {

    console.log(`${index}: ${test}`);
});

// entries() — index + value

for (let [i, test] of tests.entries()) {
    console.log(i, test);
}
 /// for student in student

let students = ["methis", "senthil", "ajay", "rahul"];

for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}