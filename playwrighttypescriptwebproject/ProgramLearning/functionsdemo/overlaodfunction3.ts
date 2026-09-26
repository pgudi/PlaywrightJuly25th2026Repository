// Case 3: Functions are having different number of Parameters with different types and Return type is different type
function department():String
function department(deptno:number):number
function department(deptno:number, dname:string):String
function department(dname:string,loc:string):string

function department(deptno?:number, dname?:string, loc?:string):(number | string){
    if(typeof(dname)!=='undefined' && typeof(loc)!=='undefined'){
        return dname+"  "+loc;
    }else if(typeof(deptno)!=='undefined' && typeof(dname)!=='undefined'){
        return deptno+" -> "+dname
    }else if(typeof(deptno)!=='undefined'){
        return deptno
    }else{
        return " It is No Args Method"
    }
}

console.log(department("Sales","Dallas"))