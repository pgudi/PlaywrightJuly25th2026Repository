// map function

let numbers = [2,6,4,7,3,2,8]

// square of each numbers
let result1=numbers.map(function(x){
    return (x * x)
})

console.log(result1);

let result2=numbers.map((x)=>{
    return (x * x)
})

console.log(result2);

function sqaure(x){
    return (x * x)
}

let result3=numbers.map(sqaure)
console.log(result3);
console.log("-------------------------");
// Cube of each numbers
let output1=numbers.map(function(x){
    return (x * x * x)
})
console.log(output1);

function cube(x){
    return (x * x * x)
}
let output2=numbers.map(cube)
console.log(output2);

let output3=numbers.map((x)=>{
    return (x * x * x)
})
console.log(output3);
