/*
3) Combine elements from first array and second array and store into third array and read elements for third array
Step 1: Declare first array with elements
Step 2: Declare second array with eleemnts
Step 3: declare an empty array
Step 4. Read Elements from first array and assign into result array /third array
Step 5: Read Elements from second array and assign into result array /third array
Step 6: Read Eleemnts from result Array
*/

let fruits=["Mango","Orange","Apple","Banana"]
let flowers=["Sunflower","Lotus","Cosmos"]
//delcare result array
let result=[]
//read Elements from first array and assign into result array /third array
let k=0
for(let i=0;i<fruits.length;i++){
    result[k]=fruits[i]
    k=k+1
}
// Read Elements from second array and assign into result array /third array
for(let j=0;j<flowers.length;j++){
    result[k]=flowers[j]
    k=k+1
}

//Read Eleemnts from result Array
console.log(result);
