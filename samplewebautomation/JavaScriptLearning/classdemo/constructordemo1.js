class Department{
    constructor(){
        this.deptno=10
        this.dname="Sales"
        this.loc="Dallas"
    }
    display(){
        console.log(this.deptno, this.dname, this.loc);
    }
}

let obj1=new Department()
obj1.display()

let obj2=new Department()
obj2.display()