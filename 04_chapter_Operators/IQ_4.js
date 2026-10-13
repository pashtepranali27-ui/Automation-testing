

let statusCode = 300;
let Result =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";



console.log(`Result ${statusCode}: '${Result}'`);