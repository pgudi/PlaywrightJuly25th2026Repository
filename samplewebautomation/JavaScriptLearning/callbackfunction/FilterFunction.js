// Filter function

let numbers = [2,6,4,7,3,5,8]

//display greater than 4
let result1=numbers.filter(function(x){
    return ((x > 4)==true)
})
console.log(result1);

function greaterthan4(x){
    return ((x > 4)==true)
}

let result2=numbers.filter(greaterthan4)
console.log(result2);

let result3=numbers.filter((x)=>{
    return ((x > 4)==true)
})
console.log(result3);
console.log("-----------------------------------");
// display Even numbers 
let output1=numbers.filter(function(x){
    return ( x % 2 == 0)
})
console.log(output1);

function even(x){
    return (x % 2 ==0)
}
let output2=numbers.filter(even)
console.log(output2);

let output3=numbers.filter((x)=>{
    return ( x % 2 == 0)
})
console.log(output3);