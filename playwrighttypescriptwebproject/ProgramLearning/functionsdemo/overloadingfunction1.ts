// Case 1: Functions are having different type of parameter and Return type is same

function display(firstname:string):string;
function display(age:number):string;

function display(datainput: (string | number)):string{
    if(typeof(datainput)=='string'){
        return "The Person name is "+datainput
    }else{
        return "The Person Age is "+datainput
    }
}

console.log(display("Srinivasa"))
console.log(display(25))