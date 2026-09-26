// Case 2: Perform addition of each array and find sum of all Elements.
// NAmed function 
function sumOfAllElements1(a:number[], b:number[]):void{
    let result:number[]=[]
    let k:number=0
    for(let i=0;i<a.length;i++){
        result[k]=(a[i] + b[i])
        k=k+1

    }
    let sum:number=0
    for(let x of result){
        sum+=x
    }
    console.log("Sum of All Elements :",sum)
}

let arr1:number[]=[1,2,3,4,5]
let arr2:number[]=[10,20,30,40,50]
sumOfAllElements1(arr1, arr2)
console.log("------------------------------------")
// Ananymous Function 
let sumOfAllElements2=function(a:number[], b:number[]):void{
    let result:number[]=[]
    let k:number=0
    for(let i=0;i<a.length;i++){
        result[k]=(a[i] + b[i])
        k=k+1

    }
    let sum:number=0
    for(let x of result){
        sum+=x
    }
    console.log("Sum of All Elements :",sum)
}


let x:number[]=[1,2,3,4]
let y:number[]=[10,20,30,40]
sumOfAllElements2(x, y)

console.log("------------------------------------")
// Arrow Function 
let sumOfAllElements3=(a:number[], b:number[]):void =>{
    let result:number[]=[]
    let k:number=0
    for(let i=0;i<a.length;i++){
        result[k]=(a[i] + b[i])
        k=k+1

    }
    let sum:number=0
    for(let x of result){
        sum+=x
    }
    console.log("Sum of All Elements :",sum)
}

let x1:number[]=[5,10,15,20]
let y1:number[]=[10,20,30,40]
sumOfAllElements3(x1, y1)