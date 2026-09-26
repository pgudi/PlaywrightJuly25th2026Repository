// case 1: find Factorial of a number
// Named function
function findFactorial1(num:number):void{
    let fact:number=1
    for(let i:number=num;i>=1;i--){
        fact=fact * i
    }
    console.log("FActorial of "+num+" is "+fact)
}

findFactorial1(5)
console.log("---------------------------------")
// Ananymous Function
let findFactorial2=function(num:number):void{
    let fact:number=1
    for(let i:number=num;i>=1;i--){
        fact=fact * i
    }
    console.log("Factorial of "+num+" is "+fact)
}
findFactorial2(6)
console.log("---------------------------------")
// Arrow Function
let findFactorial3=(num:number):void =>{
    let fact:number=1
    for(let i:number=num;i>=1;i--){
        fact=fact * i
    }
    console.log("Factorial of "+num+" is "+fact)
}
findFactorial2(7)