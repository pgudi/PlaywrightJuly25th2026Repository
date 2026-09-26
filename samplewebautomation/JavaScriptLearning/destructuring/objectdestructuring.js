let employee={
    "eid":101,
    "ename":"Santosh",
    "job":"Analyst",
    "sal":34000,
    "dname":"Accounting"
}

// let {eid, ename} = employee
// console.log(eid, ename);
console.log("------------------");

// let {eid,job,dname}=employee
// console.log(eid,job, dname);
console.log("------------------");

let {eid,ename,...emp} =employee
console.log(eid,ename);
console.log(emp);

