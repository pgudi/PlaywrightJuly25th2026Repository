class Department{
    deptno
    dname
    loc
}

let obj1=new Department()
obj1.deptno=10
obj1.dname="Accounting"
obj1.loc="California"
console.log(obj1.deptno);
console.log(obj1.dname);
console.log(obj1.loc);
console.log("---------");
Department.deptno=20
Department.dname="Research"
Department.loc="Boston"
console.log(Department.deptno);
console.log(Department.dname);
console.log(Department.loc);

