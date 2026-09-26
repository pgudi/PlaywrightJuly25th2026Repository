
class Department{
    deptno!:number
    dname!:string
    loc!:string
}
let obj1:Department =new Department()
obj1.deptno=101
obj1.dname="Accounting"
obj1.loc="New York"
console.log(obj1.deptno)
console.log(obj1.dname)
console.log(obj1.loc)