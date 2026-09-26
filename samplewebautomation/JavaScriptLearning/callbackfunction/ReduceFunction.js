// Reduce function

let numbers = [2,6,4,7,3,5,8]

// sum of Elements in the given array
let sum=0
for(let i=0;i<numbers.length;i++){
    sum=sum+numbers[i]
}
console.log("Sum of Elements in Array :"+sum);

console.log("-----------------------------")

let result1=numbers.reduce(function(acc,curr){
    acc=acc+curr
    return acc
},0)
console.log(result1);
