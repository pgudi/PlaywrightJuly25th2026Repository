// Case 3: Write a function to find number of elements in a given array using 
// Named function, anonymous function and Arrow function
//Named Function to find Number of Elements in a given array
function lengthOfArray(arr){
    let count=0
    for (let x of arr){
        count=count+1
    }
    return count
}
let v1=lengthOfArray([10,20,30,40,50,60])
console.log("Length of an Array :"+v1);


let fruits = ["Mango","apple","Grapes","Banana"]
for(let i=0;i<lengthOfArray(fruits);i++){
    console.log(fruits[i]);
    
}
console.log("---------------------");
//ananymous Function to find Number of Elements in a given array
let lengthOfArray2= function (arr){
    let count=0;
    for(let x of arr){
        count=count+1
    }
    return count
}
let v2=lengthOfArray2(new Array(2,4,6,8,10,12))
console.log("Number of Eleemnts in Array :"+v2);
console.log("---------------------");
//Arrow Function to find Number of Elements in a given array
let lengthOfArray3=(arr)=>{
    let count=0;
    for(let x of arr){
        count=count+1
    }
    return count
}
let v3=lengthOfArray3(["Lotus",40,50,true,"Mango"])
console.log("Number of Eleemnts in Array :"+v3);