class Product{
    static showProductName(pname){
        console.log("Product Name :"+pname)
    }

    displayProductPrice(price){
        console.log("Product Price :"+price)
    }
}

let obj=new Product()
obj.displayProductPrice(35000)

Product.showProductName("Lenovo Laptop")
