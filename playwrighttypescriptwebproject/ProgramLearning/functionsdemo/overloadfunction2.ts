// Case 2: Functions are having different number of Parameters and Return type is same
function addition(num1:number,num2:number):number
function addition(num1:number,num2:number,num3:number):number

function addition(num1:number,num2:number,num3?:number):number{
    let result=0
    if(typeof(num3)!=='undefined'){
        result=(num1 + num2 + num3)
    }else{
        result=(num1+num2)
    }
    return result;
}

console.log(addition(10,20,30))
console.log(addition(40,30))
