// print numbers 20 to 40

let num=20
function displayNumbers(){
    if(num<=40){
        console.log(num);
        num=num+1
        displayNumbers()
    }
}

displayNumbers()
console.log("-------------------------");


