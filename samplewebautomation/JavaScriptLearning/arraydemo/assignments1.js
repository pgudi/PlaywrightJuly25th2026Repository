/*
 1) Programmatically assign even numbers 20 to 40 into an array and Read Elements in reverse order.
 Step 1: Make sure i can display numbers 20 to 40
 Step 2: Make sure I can displays even numbers from 20 to 40
 Step 3: Declare an empry array
 Step 4: Assign each even numebrs into an array
 Step 5: Read Eleemnts from array in reverse order
 
*/
// declare an array
let evennumbers=[]
let k=0
for (let i=20;i<=40;i++){
    if(i % 2 ==0){
       evennumbers[k]=i
       k=k+1
    }
}

//Read Reverse order
for(let i=evennumbers.length-1;i>=0;i--){
    console.log(evennumbers[i]);
}