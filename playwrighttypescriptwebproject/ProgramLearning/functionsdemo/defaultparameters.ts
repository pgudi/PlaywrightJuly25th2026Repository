// Case 3: Default Parameters in TypeScript
function showEmployeeDetails(empno:number,ename:string,job:string="Sales Executive",sal:number=42000):void{
    console.log("Employee Number :"+empno)
    console.log("Employee Name :"+ename)
    console.log("Employee Job Name :"+job)
    console.log("Employee Salary :"+sal)
    console.log("--------------")
}

showEmployeeDetails(101,"Santosh","Manager",45000)
showEmployeeDetails(102,"Vinith")
showEmployeeDetails(103,"Sahana","Analyst")