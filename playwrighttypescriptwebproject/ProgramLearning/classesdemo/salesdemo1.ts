
class Sales{
    itemId!:number
    itemName!:String
    price!:number
    constructor(itemId:number, itemName:string, price:number){
        this.itemId=itemId
        this.itemName=itemName
        this.price=price
    }

    showSalesDetails(){
        console.log(this.itemId, "-", this.itemName, "-", this.price)
    }
}
let o1:Sales=new Sales(10,"PenDrive",1250)
o1.showSalesDetails()
let o2:Sales=new Sales(20,"Monitor",4500)
o2.showSalesDetails()