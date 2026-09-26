class Employee{
    displayEmployeeId(empid){
        console.log("Employee Number :"+empid)
    }

    dispayEmployeeName(empname){
        console.log("Employee Name :"+empname)
    }

    displayEmployeeJobname(jobname){
        console.log("Employee Job :"+jobname)
    }
}

let obj1=new Employee()
obj1.displayEmployeeId(1001)
obj1.dispayEmployeeName("Santosh")
obj1.displayEmployeeJobname("Analyst")