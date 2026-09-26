// Inbuilt Functions in JavaScript
// starts with : It provides true if string availalbe at beginning
// ends with : It provides true if string availalbe at end
// includes : It provides true if string availalbe 
let str1="Bangalore is a capital city of Karnataka"
console.log(str1.startsWith("Bangalore"));  // true
console.log(str1.endsWith("Karnataka"));  // true
console.log(str1.includes("capital"));  // true
console.log("--------------------------------");
// padStart : It appends number of characters at first
let str2="Welcome"
console.log(str2.padStart(10,"%"));

console.log("--------------------------------");
// padEnd : It appends number of characters at end
let str3="Welcome"
console.log(str2.padEnd(15,"%"));
console.log("--------------------------------");