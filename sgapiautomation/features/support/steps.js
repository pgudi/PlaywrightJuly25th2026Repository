const { Given, When, Then } = require("@cucumber/cucumber")
const { request, expect } = require("@playwright/test")
let apiRequest
let authToken = ""
let response

Given('I execute authentication using authenticate POST HTTP Method', async function () {
    apiRequest = await request.newContext()
    response = await apiRequest.post("https://sgtestinginstitute.onrender.com/api/v1/authenticate", {
        data: {
            "username": "pgudi",
            "password": "pgudi"
        },
        headers: {
            "Context-Type": "application/json"
        }
    })
    authToken = (await response.text()).toString()
    //Validate
    await expect(response.status()).toBe(200)
});

When('I execute GET Customers using GET HTTP Method', async function () {
    response = await apiRequest.get("https://sgtestinginstitute.onrender.com/api/v1/customers", {

        headers: {
            "Context-Type": "application/json",
            "Authorization": "Bearer " + authToken
        }
    })

});

When('I find the all customers response', async function () {
    const allCustomers = (await response.text()).toString()
    console.log("All Existing Customers :" + allCustomers)
});

Then('I find 200 status Code', async function () {
    //Validate
    await expect(response.status()).toBe(200)
});

When("I execute GET Employees using GET HTTP Method", async function(){
    response = await apiRequest.get("https://sgtestinginstitute.onrender.com/api/v1/employees", {

        headers: {
            "Context-Type": "application/json",
            "Authorization": "Bearer " + authToken
        }
    })
})

When("I find the all Employees response", async function(){
    const allEmployees = (await response.text()).toString()
    console.log("All Existing Employees :" + allEmployees)
})