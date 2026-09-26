class Department{
    constructor(deptno,dname,loc){
        this.deptno=deptno
        this.dname=dname
        this.loc=loc
    }
    displayDepartmentDetails(){
        console.log("Department Number:"+this.deptno);
        console.log("Department Name:"+this.dname);
        console.log("Department Location:"+this.loc);
    }
}

class Employee extends Department{
    constructor(empid,ename,job,sal, deptno,deptname,deptloc){
        super(deptno,deptname,deptloc)
        this.empid=empid
        this.ename=ename
        this.job=job
        this.sal=sal
    }
    displayEmployeeDetails(){
        console.log("Employee Id :"+this.empid)
        console.log("Employee Name :"+this.ename)
        console.log("Employee job :"+this.job)
        console.log("Employee Salary :"+this.sal)
    }
}

let obj=new Employee(1001,"Santosh","Analyst",27000, 10,"Accounting","Boston")
obj.displayEmployeeDetails()
obj.displayDepartmentDetails()