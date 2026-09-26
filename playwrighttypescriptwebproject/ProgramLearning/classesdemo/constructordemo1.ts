export{}
class Product{
    prodname!:string
    quantity!:number

    constructor(){
        this.prodname="Lenovo Desktop"
        this.quantity=5
    }

    displayProductDetails(){
        console.log(this.prodname, "-->", this.quantity)
    }
}

let o:Product=new Product()
o.displayProductDetails()

let o1:Product=new Product()
o1.displayProductDetails()