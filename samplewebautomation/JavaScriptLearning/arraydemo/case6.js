// Case 6: How to Read Elements from an array based on order of adding [for each]
//declare an array
let arr=[30,40,50,60,70,70,80]

//Read Eleemnts from an array using for in statement
for(let x in arr){
    console.log(arr[x]); 
}
console.log("----------------------");
//Read Eleemnts from an array using for of statement
for(let element of arr){
    console.log(element)
}