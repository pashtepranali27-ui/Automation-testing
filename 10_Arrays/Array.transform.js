
let Results =[30,45,70,89,90];

let grades = Results.map(i => i >70? "pass": " Fail");
     console.log(grades);

     /////filter///no ternary operator for filter

     let passing = Results.filter(i=>i>=70);
     console.log(passing);