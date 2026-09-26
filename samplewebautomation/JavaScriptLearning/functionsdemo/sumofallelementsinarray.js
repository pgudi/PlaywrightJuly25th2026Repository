// Named function to find sum of all Elements
function findSumOfElements1(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    console.log("Sum of All Elements :"+sum)
}

findSumOfElements1([10,20,30,40,50,60])
findSumOfElements1(new Array(1,2,3,4,5,6,7,8,9,10))
let b=[20,40,60,80]
findSumOfElements1(b)
let arr=[1,2,3,4,5]
findSumOfElements1(arr)
console.log("----------------------------");
// Ananymous Function to find sum of all Elements
let findSumOfElements2=function(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    console.log("Sum of All Elements :"+sum)
}
let newArr=[2,4,6,8,10]
findSumOfElements2(newArr)
console.log("----------------------------");
// Arraow function to find sum of all Elements
let findSumOfElements3=(arr)=>{
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    console.log("Sum of All Elements :"+sum)
}
let z=[100,200,300]
findSumOfElements3(z)
