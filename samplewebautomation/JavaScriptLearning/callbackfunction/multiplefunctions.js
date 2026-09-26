
function employeeDetails(ename, job,showEmpName, showJobName){
    showEmpName(ename)
    showJobName(job)
}

function showEmpJobName(jobname){
    console.log("Job Name of the Employee :"+jobname);
}

function showEmpName(employeename){
    console.log("Employee Name :"+employeename)
}

employeeDetails("Santosh","analyst", showEmpName, showEmpJobName)
console.log("--------------------");
employeeDetails("Adams","clerk", 
 (jobname)=>{
    console.log("Job Name of the Employee :"+jobname);
},
 (employeename)=>{
    console.log("Employee Name :"+employeename)
}
)
