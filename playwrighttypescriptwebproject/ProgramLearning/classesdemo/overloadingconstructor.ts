export {}

class Employee{
    constructor()
    constructor(empid:number, ename:string)
    constructor(empid:number,ename:string,jobname:string)

    constructor(empid?:number, ename?:string, jobname?:string){
        if(typeof(empid)!=='undefined' && typeof(ename)!=='undefined' && typeof(jobname)!=='undefined'){
            console.log("Employee ID :"+empid)
            console.log("Employee Name :"+ename)
            console.log("Employee Job Name :"+jobname)
        }else if(typeof(empid)!=='undefined' && typeof(ename)!=='undefined'){
            console.log("Employee ID :"+empid)
            console.log("Employee Name :"+ename)
        }else{
            console.log("It is a No Args Constructor!!!!")
        }
    }
}

let o1=new Employee()
let o2=new Employee(101,"Vinith")
let o3=new Employee(102,"Srinivasa","Clerk")