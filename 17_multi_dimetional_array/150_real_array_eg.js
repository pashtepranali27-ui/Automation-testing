
let testData = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];
for(let i = 0;i< testData.length;i++){

    for (let j = 0 ;j<testData[i].length; j++){
         process.stdout.write(String(testData[i][j]+" ") );

    }


 console.log("");
}
