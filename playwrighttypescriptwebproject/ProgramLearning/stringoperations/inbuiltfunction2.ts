// Inbuilt Functions
// trimstart -> It removes blank space at beginning
let str1:string="   Welcome   "
console.log("Before Applying trimStart :"+str1.length)
console.log("After Applying trimStart :"+str1.trimStart().length)
console.log("-----------------")
// trimEnd -> It removes blank space at end position
let str2:string="   Welcome   "
console.log("Before Applying trimEnd :"+str2.length)
console.log("After Applying trimEnd :"+str2.trimEnd().length)
console.log("-----------------")
//trim -> It removes blnak spaces at both the sides
let str3:string="   Welcome   "
console.log("Before Applying trim :"+str3.length)
console.log("After Applying trim :"+str3.trim().length)
console.log("-----------------")
// Replace : It repalce teh existing string with replacement String
let str4:string="It is an old palace"
console.log(str4.replace("is","was"))
console.log("-----------------")
// split -> It splits teh String based on delimeter by default it take space as delimiter
let str5:string="Apple,Mango,Grapes,Orange"
for (let item of str5.split(",")){
    console.log(item)
}
console.log("-----------------")
// substring : it is used to extract the string based on range and position
let str6:string="Programming"
console.log("Based on Position :"+str6.substring(3))
console.log("Based on Range :"+str6.substring(3,7))