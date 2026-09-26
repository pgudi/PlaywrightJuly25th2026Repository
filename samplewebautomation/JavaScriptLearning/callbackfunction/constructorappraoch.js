
// function showDepartment(){
//     this.deptno=10
//     this.dname="Accounting"
//     this.location="California"
// }

// let obj1=new showDepartment()
// console.log(obj1.deptno, obj1.dname, obj1.location);

console.log("-----------------------------------");

let showDepartment2=function(){
    this.deptno=10
    this.dname="Accounting"
    this.location="California"
}

let obj2=new showDepartment2()
console.log(obj2.deptno, obj2.dname, obj2.location);
console.log("-----------------------------------");

// let showDepartment3=()=>{
//     this.deptno=10
//     this.dname="Accounting"
//     this.location="California"
// }

// let obj3=new showDepartment3()
// console.log(obj3.deptno, obj3.dname, obj3.location);