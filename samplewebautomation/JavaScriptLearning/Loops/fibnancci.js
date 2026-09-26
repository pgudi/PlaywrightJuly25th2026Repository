// 7)Write a program to display first 10 Fibonacci numbers?

let fn=0
let sn=1
console.log(fn);
console.log(sn);

for(let i=1;i<=8;i++){
    let tn=fn + sn
    console.log(tn);
    fn=sn
    sn=tn    
}

