export {}
/*
 1
 1 2
 1 2 3
 1 2 3 4
 1 2 3 4 5
*/
//for loop
let pattern1:string=""
for(let i:number=1;i<=5;i++){
    for(let j:number=1;j<=i;j++){
        pattern1=pattern1+j+" "
    }
    pattern1=pattern1+"\n"
}
console.log(pattern1)
console.log("---------------------")
//while Loop
let pattern2:string=""
let x:number=1
while(x<=5){
    let y:number=1
    while(y<=x){
        pattern2=pattern2+y+" "
        y++
    }
    pattern2=pattern2+"\n"
    x++
}
console.log(pattern2)
console.log("---------------------")
//do while Loop
let pattern3:string=""
let a:number=1
do{
    let b:number=1
    do{
        pattern3=pattern3+b+" "
        b++
    }while(b<=a)
    pattern3=pattern3+"\n"
    a++
}while(a<=5)
console.log(pattern3)