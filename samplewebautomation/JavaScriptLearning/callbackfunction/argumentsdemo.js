

function display(){
    for(let x of arguments){
        console.log(x);
        
    }
}
display("Santosh","Manager",350000)

console.log("----------------------");
let display2= function(){
    for(let x of arguments){
         console.log(x);
   }
}
display2(40,50,60)
console.log("----------------------");
let display3= ()=>{
    for(let x of arguments){
         console.log(x);
   }
}
display3(70,80,90)
console.log("----------------------");