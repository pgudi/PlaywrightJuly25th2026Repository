class SalesDepartment{
    showDepartmentName(oname){
        console.log("It is a Sales Deaprtment of an Organization "+oname)
    }
}

class PurchaseDepartment extends SalesDepartment{
    constructor(orgname){
        super()
        super.showDepartmentName(orgname)
    }
    showDepartmentName(oname){
        console.log("It is a Purchase Deaprtment of an Organization "+oname)
    }
}

let obj=new PurchaseDepartment("S K Consulting")
obj.showDepartmentName("GowriSoft")
