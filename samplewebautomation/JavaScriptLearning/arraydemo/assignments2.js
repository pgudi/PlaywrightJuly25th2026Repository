/*
2) Programmatically assign numbers 1 to 100 into an array which are divisible by 9 and read second half of the Elements.
Step 1: print numbers 1 to 100
Step 2: from step 1 get numbers which are divisible by 9
Step 3: Declare an empty array
Step 4: assign each elements into an array
Step 5: Read Second half of teh Elements

*/
//Declare an empty array
let arr =[]
let k=0
for(let i=1;i<=100;i++){
    if(i % 9 ==0){
        arr[k]=i
        k=k+1
    }
}
console.log(arr);
console.log(arr.length/2);
console.log(parseInt(arr.length/2));
//Read Second half of the Elements
for(let i=parseInt(arr.length/2);i<arr.length;i++){
    console.log(arr[i]);
}
