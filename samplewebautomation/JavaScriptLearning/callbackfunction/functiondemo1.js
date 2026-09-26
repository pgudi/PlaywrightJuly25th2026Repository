
function mainFunction(callback){
    console.log("It is a Main Function Execution !!!");
    callback()
}

function callBackFunction(){
    console.log("It is a Call Back Function");
}

mainFunction(callBackFunction)