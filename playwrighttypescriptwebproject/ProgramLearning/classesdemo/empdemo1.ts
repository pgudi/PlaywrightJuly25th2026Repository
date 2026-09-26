class Employee{
    empno!:number
    ename!:string
    jobname!:string
    sal!:number
    cityname!:string
    country!:string
}
let o:Employee=new Employee()
o.empno=1122
o.ename="Santosh"
o.jobname="Research Analyst"
o.sal=47000
o.cityname="New york"
o.country="USA"
console.log(o.empno)
console.log(o.ename)
console.log(o.jobname)
console.log(o.sal)
console.log(o.cityname)
console.log(o.country)