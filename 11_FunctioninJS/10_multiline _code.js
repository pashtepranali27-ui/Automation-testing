
//Mutiline
const getResult = (score) => {
    if(score > 70) return "Pass";
    return "fail";
}

let result = getResult(79);
console.log(result);
console.log(typeof result);
