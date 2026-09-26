// using Recursion find factorial of a Number

function getFactorial(num){
    if(num==1){
        return 1
    }
    return num * getFactorial(num-1)
}

console.log(getFactorial(4));
console.log(getFactorial(5));
console.log(getFactorial(6));
/*
let v1=getFactorial(5)
console.log(v1) // 120

5 * getFactorial(5-1)
5 * 4 * getFactorial(4-1)
5 * 4 * 3 * getFactorial(3-1)
5 * 4 * 3 * 2 *  getFactorial(2-1)
5 * 4 * 3 * 2 * 1 =120
*/