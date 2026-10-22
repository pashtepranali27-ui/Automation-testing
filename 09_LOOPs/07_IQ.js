
const prompt = require("prompt-sync")();
let mark = Number(prompt(" enter marks"));

if (mark >= 90 && mark <= 100 ){
    console.log("Grade A");
} else if(mark >= 80 && mark < 90){
    console.log("Grade B");
} else if (mark >= 70 && mark < 80){
    console.log("Grade c");
} else if (mark >= 60 && mark < 70){
    console.log("Grade d");
} else if (mark>=0 && mark<60){
     console.log("fail");
}else{
      console.log("invalid number");
}
