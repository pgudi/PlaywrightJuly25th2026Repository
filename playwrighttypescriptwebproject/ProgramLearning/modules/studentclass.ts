
export class Student{
    rollno!:number
    firstname!:string
    coursename!:string
    constructor(rollno:number, firstname:string,coursename:string){
        this.rollno=rollno
        this.firstname=firstname
        this.coursename=coursename
    }

    showStudentRollNo(){
        console.log("Student Roll Number :"+this.rollno)
    }

    showStudentFirstName(){
        console.log("Student First Name :"+this.firstname)
    }
    showCourseName(){
        console.log("Student Course Name :"+this.coursename)
    }
}