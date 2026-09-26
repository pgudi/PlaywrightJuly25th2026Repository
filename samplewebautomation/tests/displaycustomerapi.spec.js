// Case 1: authenticate -> Display Customer
const {test, expect} = require("@playwright/test")
let authToken=""
test("Authentication token", async({request})=>{
    const response=await request.post("https://sgtestinginstitute.onrender.com/api/v1/authenticate",{
        data:{
            "username": "pgudi",
            "password": "pgudi"
        },
        headers:{
            "Content-Type":"application/json"
        }
    })

    authToken=(await response.text()).toString()
    console.log("Token :"+authToken)
    await expect(response.status()).toEqual(200)
})

test("Display Existing Customer Scenario", async({request})=>{
    const response=await request.get("https://sgtestinginstitute.onrender.com/api/v1/customers/1099",{
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+authToken
        }
    })
    // display response
    const responsebody=(await response.text()).toString()
    console.log("Customer Response :"+responsebody)
    await expect(response.status()).toEqual(200)
})