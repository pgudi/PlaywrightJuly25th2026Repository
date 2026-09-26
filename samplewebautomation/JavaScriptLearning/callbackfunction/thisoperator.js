// let employee={
//     "empid":1910,
//     "empname":"Santosh",
//     "jobname":"Sales Executive",
//     "salary":40000,
//     "bonus": function show1(){
//                 return (this.salary * 5)/100
//             },
//     "commission": function show2(){
//                 return (this.salary * 10)/100
//             },
//     "incentives": function show3(){
//                 return (this.bonus() + this.commission())
//             }
// }

// console.log(employee.empid);
// console.log(employee.empname);
// console.log(employee.jobname);
// console.log(employee.salary);
// console.log(employee.bonus());
// console.log(employee.commission());
// console.log(employee.incentives());

console.log("----------------------------------");
// let employee={
//     "empid":1910,
//     "empname":"Santosh",
//     "jobname":"Sales Executive",
//     "salary":40000,
//     "bonus": function(){
//                 return (this.salary * 5)/100
//             },
//     "commission": function(){
//                 return (this.salary * 10)/100
//             },
//     "incentives": function(){
//                 return (this.bonus() + this.commission())
//             }
// }

// console.log(employee.empid);
// console.log(employee.empname);
// console.log(employee.jobname);
// console.log(employee.salary);
// console.log(employee.bonus());
// console.log(employee.commission());
// console.log(employee.incentives());
console.log("----------------------------------");
let employee={
    "empid":1910,
    "empname":"Santosh",
    "jobname":"Sales Executive",
    "salary":40000,
    "bonus": ()=>{
                return (this.salary * 5)/100
            },
    "commission": ()=>{
                return (this.salary * 10)/100
            },
    "incentives": ()=>{
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