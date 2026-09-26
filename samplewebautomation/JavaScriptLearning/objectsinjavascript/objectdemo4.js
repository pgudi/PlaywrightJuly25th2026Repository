// Case 4: Create an object which has properties  and delete existing properties.
let customer={
    "custid":101,
    "customername":"Lenovo Servies",
    "emailid":"services@lenovo.com",
    "description":"Provides Laptop Services"
}
console.log(customer);
//delete property name
delete customer.description
console.log(customer);
