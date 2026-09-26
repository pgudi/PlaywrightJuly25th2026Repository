// Named function to display primen umebrs 50 to 100
function displayPrimeNumebrs1(start, end){
    for(let i=start;i<=end;i++){
        let flag=0
        for(let j=2;j<i;j++){         
            if(i % j ==0){
                flag=flag+1
                break
            }
        }
        if(flag==0){
            console.log(i)
        }
    }
}

displayPrimeNumebrs1(40,80)
console.log("-----------------------");
// Ananymous function to display primen umebrs 50 to 100
let displayPrimeNumebrs2=function(start, end){
    for(let i=start;i<=end;i++){
        let flag=0
        for(let j=2;j<i;j++){         
            if(i % j ==0){
                flag=flag+1
                break
            }
        }
        if(flag==0){
            console.log(i)
        }
    }
}
displayPrimeNumebrs2(20,50)
console.log("-----------------------");
// Arrow function to display primen umebrs 50 to 100
let displayPrimeNumebrs3=(start, end) =>{
    for(let i=start; i<=end;i++){
        let flag=0
        for(let j=2;j<i;j++){
            if(i % j ==0){
                flag=flag+1
                break
            }
        }
        if(flag==0){
            console.log(i)
        }
    }
}
displayPrimeNumebrs3(50,100)

