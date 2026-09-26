import {test, expect} from "@playwright/test"

test.describe("Sanity Tests",async()=>{
    test("First Santiy test", async()=>{
        console.log("It is a First Sanity Test")
    })

    test("Second Santiy test", async()=>{
        console.log("It is a Second Sanity Test")
    })
})

test.describe.only("Regression Tests",async()=>{
    test("First Regression test", async()=>{
        console.log("It is a First Regression Test")
    })

    test("Second Regression test", async()=>{
        console.log("It is a Second Regression Test")
    })
})

test.describe("Unit Tests",async()=>{
    test("First Unit test", async()=>{
        console.log("It is a First Unit Test")
    })

    test("Second Unit test", async()=>{
        console.log("It is a Second Unit Test")
    })
})

test.describe("Restful API Tests",async()=>{
    test("First API test", async()=>{
        console.log("It is a First API Test")
    })

    test("Second API test", async()=>{
        console.log("It is a Second API Test")
    })
})