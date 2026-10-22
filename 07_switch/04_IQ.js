
let statuscode = 404 ;

switch(statuscode) {
    case 200:
        console.log(" status OK");
        break;
    case 404:
        console.log(" not found");
        break;                  
    case 500:
        console.log(" internal server error");
        break;  
    default:
        console.log(" not a valid status code");
}