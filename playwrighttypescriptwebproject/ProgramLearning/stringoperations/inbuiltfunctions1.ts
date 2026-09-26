export {}
// In built Functions
// lower case
let str1:string="WELCOME"
console.log(str1.toLowerCase())
console.log("--------------")
// upper case
let str2:string="programming"
console.log(str2.toUpperCase())
console.log("--------------")
// length: find number of characters in a given String
let str3:string="Good Morning"
console.log("# of Characters :"+str3.length)
console.log("--------------")
// chatAt
let str4:string="PLAYING"
console.log(str4.charAt(0))  
console.log("--------------")
// startsWith, endsWith, includes to verify existane o String
let str5:string="Mango is a king of All Fruits"
console.log("Starts With :"+str5.startsWith("Mango"))
console.log("Ends With :"+str5.endsWith("Fruits"))
console.log("Starts With :"+str5.includes("king"))
console.log("--------------")
// indexOf -> It provides position from Left to Right
let str6:string="It is a book, It is on the table"
console.log("Position of 'is' "+str6.indexOf("is"))
console.log("Position of 'It' "+str6.indexOf("It"))

//lastIndexOf -> It provides position from Right to Left
console.log("Position of 'is' "+str6.lastIndexOf("is"))
console.log("Position of 'It' "+str6.lastIndexOf("It"))
console.log("--------------")