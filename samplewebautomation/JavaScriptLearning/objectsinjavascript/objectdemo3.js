//Case 3: Create an object which has properties  and read property and property values from object

let department={
    "deptnono":10,
    "dname":"Accounting",
    "location":"California"
}

for(let x in department){
    console.log(x+" -> "+department[x]);
    
}