export {}

class Department{
    deptno!:number
    dname!:string
    loc!:string
}

let o1:Department=new Department()
o1.deptno=101
o1.dname="Operations"
o1.loc="Dallas"
console.log(o1.deptno)
console.log(o1.dname)
console.log(o1.loc)

let o2:Department=new Department()
o2.deptno=102
o2.dname="Research"
o2.loc="Boston"
console.log(o2.deptno)
console.log(o2.dname)
console.log(o2.loc)