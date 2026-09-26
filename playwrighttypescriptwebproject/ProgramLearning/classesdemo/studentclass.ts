export{}

class Student{
    static collegeName:String="SLN Engineering College"

    static displayStudentName(studentName:string):void{
        console.log("Student Name :"+studentName)
    }

    static showCityName(cityname:string){
        console.log("City Name :"+cityname)
    }
}

console.log(Student.collegeName)
Student.displayStudentName("Santosh")
Student.showCityName("New York")