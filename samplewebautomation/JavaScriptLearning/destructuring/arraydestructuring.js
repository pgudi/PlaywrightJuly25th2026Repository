// Destructuring of Array
let arr=[10,20,30,40,50,60,70,80]

let [a1,a2,a3]=arr
console.log(a1,a2,a3);  // 10 20 30

console.log("-------------------");
let [b1,,,,b2,,,b3]=arr
console.log(b1,b2,b3)

console.log("-------------------");
let [c1,c2,...c3]=arr
console.log(c1,c2);
console.log(c3);

