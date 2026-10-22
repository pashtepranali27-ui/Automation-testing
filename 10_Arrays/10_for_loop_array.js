
const browser = ["chrome", "firefox", "opera", "safari"];

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]); 
    
    if (browser[i] === "opera") {
        console.log("opera is not supported");
    }
}