export {}
class Project{

    showProjectName(projectname:string):string{
        return projectname
    }

    displayProjectdomain(projectdomain:string):void{
        console.log("the Project Domain :"+projectdomain)
    }
}

let o:Project=new Project()
console.log(o.showProjectName("Pharmacy Management"))
o.displayProjectdomain("Healthcare")