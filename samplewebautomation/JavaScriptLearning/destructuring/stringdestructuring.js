// Destructuring of String
let str="WELCOME"

let [s1,s2,s3]=str
console.log(s1,s2,s3);
console.log("--------------");
let [a1,a2,a3,a4,a5,a6,a7]=str
console.log(a1,a2,a3,a4,a5,a6,a7);
console.log("--------------");
let [b1,,b2,,b3,,b4]=str
console.log(b1,b2,b3,b4);
console.log("--------------");
let [c1,c2,...c3]=str
console.log(c1,c2);
console.log(c3);
console.log("--------------");