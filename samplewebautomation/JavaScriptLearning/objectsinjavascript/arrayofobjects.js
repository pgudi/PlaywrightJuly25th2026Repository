// Case 5: Array of JavaScript Objects and Read the properties.
let products=[
    {
        "prodid":101,
        "prodname":"Dell Laptop",
        "price":34000,
        "email":"dell@services.com"
    },
    {
        "prodid":102,
        "prodname":"Lenovo Laptop",
        "price":44000,
        "email":"lenovo@support.com"
    },
    {
        "prodid":103,
        "prodname":"HP Laptop",
        "price":41000,
        "email":"hp@laptopservices.com"
    }
]

console.log(products[0].prodid);
console.log(products[0].prodname);
console.log(products[0].price);
console.log(products[0].email);
console.log(products[1].prodid);
console.log(products[1].prodname);
console.log(products[1].price);
console.log(products[1].email);
console.log(products[2].prodid);
console.log(products[2].prodname);
console.log(products[2].price);
console.log(products[2].email);
console.log("---------------------------");
//apply for loop to read Elements
for(let i=0;i<products.length;i++){
    console.log(products[i].prodid);
    console.log(products[i].prodname);
    console.log(products[i].price);
    console.log(products[i].email);
}
