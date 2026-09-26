// Case 2: Optional Parameters in TypeScript
function displayDepartmentDetails(deptno:number, dname?:string, loc?:string):void{
    if(typeof(dname)!=='undefined' && typeof(loc)!=='undefined'){
        console.log("Department Number :"+deptno)
        console.log("Department Name :"+dname)
        console.log("Department Location :"+loc)
    }else if(typeof(dname)!=='undefined'){
        console.log("Department Number :"+deptno)
        console.log("Department Name :"+dname)
    }else {
        console.log("Department Number :"+deptno)
    }
 
}

displayDepartmentDetails(10,"Accounting","Boston")
displayDepartmentDetails(20,"Sales")
displayDepartmentDetails(30)
