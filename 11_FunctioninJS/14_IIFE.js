
//Immediately Invoked Function Expression (IIFE)
//They don't need to be called. 


function name1() {
    console.log("Hi") // this is our normal function
}
name1();


(function(){
    console.log("Anonymous Fn"); // this is another way without function name
})();

(function () {
    console.log("Staging")
})();


(() => {
    console.log("Setup complete");// another version to right functio for less token
})();