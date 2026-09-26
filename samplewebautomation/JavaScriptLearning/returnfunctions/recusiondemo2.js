// display odd numbers in betweeen 61 to 91
let num=61
function displayOddNumbers(){
    if(num<=91){
        if(num % 2 ==1){
            console.log(num);
        }
        num=num+1
        displayOddNumbers()
    }
}

displayOddNumbers()