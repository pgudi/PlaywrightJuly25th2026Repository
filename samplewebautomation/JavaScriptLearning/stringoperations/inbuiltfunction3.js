// Inbuilt Functions in JavaScript
// split : based on delimeter it splits teh given string, by default it takes space as delimeter
let str1="Bangalore and Mysore"
console.log(str1.split(" "));  // [ 'Bangalore', 'and', 'Mysore' ]
console.log("-----------------------");
// repeat : It repeats teh given string based on number of occurance
let str2="Welcome"
console.log(str2.repeat(5));  // WelcomeWelcomeWelcomeWelcomeWelcome
console.log("-----------------------");
//replace: It searches and replaces
let str3="It is a new palace, it is in mysore"
console.log(str3.replace("is","was")); // It was a new palace, it is in mysore
console.log(str3.replaceAll("is","was")); // It was a new palace, it was in mysore
console.log("-----------------------");
// trimStart operation : It removes blank spaces at left side
let str4="   WELCOME   "
console.log("Before Left trim, the Length of String :"+str4.length);
console.log(str4.trimStart());
console.log("After Left trim, the Length of String :"+str4.trimStart().length);
console.log("-----------------------");
// trimEnd operation : It removes blank spaces at right side
let str5="   WELCOME   "
console.log("Before Right trim, the Length of String :"+str5.length);
console.log(str5.trimEnd());
console.log("After Left trim, the Length of String :"+str5.trimEnd().length);
console.log("-----------------------");
// trim operation : It removes blank spaces at both side
let str6="   WELCOME   "
console.log("Before trim, the Length of String :"+str6.length);
console.log(str5.trim());
console.log("After trim, the Length of String :"+str6.trim().length);
console.log("-----------------------");