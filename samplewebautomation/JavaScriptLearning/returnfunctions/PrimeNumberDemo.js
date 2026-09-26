function isPrime(num){
    let flag=0;
    for(let i=2;i<num;i++){
        if(num % i ==0){
            flag=flag+1
            break
        }
    }
    if(flag==0){
        return true
    }else{
        return false
    }
}

console.log("------------------------------");
let v1=isPrime(17)
console.log(v1);
console.log("------------------------------");
// display prime numbers 50 to 100
for(let i=50;i<=100;i++){
    if(isPrime(i)==true){
        console.log(i); 
    }
}
console.log("------------------------------");
//sum of Prime Numbers in betwen 10 to 50
let sum=0
for(let i=10;i<=50;i++){
    if(isPrime(i)==true){
        sum=sum+i
    }
}
console.log("sum of Prime Numbers 10 to 50 :"+sum);
console.log("------------------------------");
// Counto f Prime Numbers in betwee n30 to 90
let count=0
for(let i=30;i<=90;i++){
    if(isPrime(i)==true){
        count=count+1
    }
}
console.log("Count of Prime Numbers 30 to 90 :"+count);

