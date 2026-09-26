// Named function to find factorial of number
function findFactorial1(num){
    let fact=1
    for(let i=num;i>=1;i--){
        fact=fact * i
    }
    console.log("Factorial of "+num+" is "+fact);
}

findFactorial1(4)
console.log("-------------------------------------------------");
// Anonymous Function to find factorial of number
const findFactorial2=function(num){
    let fact=1
    for(let i=num;i>=1;i--){
        fact=fact * i
    }
    console.log("Factorial of "+num+" is "+fact);
}
findFactorial2(5)
console.log("-------------------------------------------------");
//Arrow Function to find factorial of number
let findFactorial3=(num)=>{
    let fact=1
    for(let i=num;i>=1;i--){
        fact=fact * i
    }
    console.log("Factorial of "+num+" is "+fact);
}
findFactorial3(6)