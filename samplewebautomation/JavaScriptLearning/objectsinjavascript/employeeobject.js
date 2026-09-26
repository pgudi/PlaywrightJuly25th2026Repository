// Case 7: Create an Object with Properties and Functions (methods)

let employee={
    "empid":1910,
    "empname":"Santosh",
    "jobname":"Sales Executive",
    "salary":40000,
    "bonus": function(){
                return (this.salary * 5)/100
            },
    "commission": function(){
                return (this.salary * 10)/100
            },
    "incentives": function(){
                return (this.bonus() + this.commission())
            }
}

console.log(employee.empid);
console.log(employee.empname);
console.log(employee.jobname);
console.log(employee.salary);
console.log(employee.bonus());
console.log(employee.commission());
console.log(employee.incentives());