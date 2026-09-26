const {test, expect} = require("@playwright/test")

test("Write a program to display a Specific Product", async({request})=>{
    const response=await request.get("https://fakestoreapi.com/products/2",{
        headers:{
            "Content-Type":"application/json"
        }
    })
    // print Response
    const responseContent=(await response.text()).toString()
    console.log("Specific Product Response :"+responseContent)
    //Validation
    await expect(response.status()).toEqual(200)
})

test(" Write a Program to find count of Titles",async({request})=>{
    const response=await request.get("https://fakestoreapi.com/products",{
        headers:{
            "Content-Type":"application/json"
        }
    })
    //First Approach
    const responseBody=await response.json()
    console.log("Number of Titles in Response :"+responseBody.length)

    //Second Approach
    let count=0

    for(let data of await response.json()){
        count=count+1
    }
    console.log("Count of title :"+count)
    //Validation
    await expect(response.status()).toEqual(200)
})


test("Write a program to display All Available titles",async({request})=>{
    const response=await request.get("https://fakestoreapi.com/products",{
        headers:{
            "Content-Type":"application/json"
        }
    })
   
    for(let data of await response.json()){
        console.log(data.title)
    }

    //Validation
    await expect(response.status()).toEqual(200)
})

test("Write a Program to display Titles which are jacket",async({request})=>{
    const response=await request.get("https://fakestoreapi.com/products",{
        headers:{
            "Content-Type":"application/json"
        }
    })
   
    for(let data of await response.json()){
        if(data.title.includes("Jacket")){
            console.log(data.title)
        }
    }

    //Validation
    await expect(response.status()).toEqual(200)
})

test.only("Write a program to display Sum of All Prices",async({request})=>{
    const response=await request.get("https://fakestoreapi.com/products",{
        headers:{
            "Content-Type":"application/json"
        }
    })
    let sum=0
    for(let data of await response.json()){
        sum=sum+data.price
    }
    console.log("Sum of All Products Price :"+sum)
    //Validation
    await expect(response.status()).toEqual(200)
})