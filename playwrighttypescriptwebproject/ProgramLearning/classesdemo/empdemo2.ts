export {}

class Employee{
    empno:number=101
    ename:string="Srinivasa"
    jobname:string="Clerk"
    sal:number=24000
    cityname:string="Tumkur"
    country:string="India"

    showEmployeeDetails(){
        console.log(this.empno)
        console.log(this.ename)
        console.log(this.jobname)
        console.log(this.sal)
        console.log(this.cityname)
        console.log(this.country)
    }
}

let o=new Employee()
o.showEmployeeDetails()