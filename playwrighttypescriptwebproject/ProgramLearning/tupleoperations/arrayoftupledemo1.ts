// Case 3: Declare an Array of Tuple in TypeScript.
let departments:[number,string,string][]=[
    [10,"Accounting","Boston"],
    [20,"Sales","Dallas"],
    [30,"Research","California"],
    [40,"Operations","New York"]
]

//Read data from Tuple
let deptdata=""
for (let i:number=0;i<departments.length;i++){
    for(let j:number=0;j<departments[i].length;j++){
        deptdata=deptdata+departments[i][j]+" "
    }
    deptdata=deptdata+"\n"
}
console.log(deptdata)