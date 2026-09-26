const {test, expect} = require("@playwright/test")
const test1 = require("./../datafiles/testdata1.json")
const testdata=require("./../datafiles/testdata2.json")

test("Read from JOSN File", async()=>{
    console.log(test1.username)
    console.log(test1.password)
})

test.only("Read data from JSON Array", async()=>{
    for(let data of testdata){
        console.log(data.username)
        console.log(data.password)
        console.log("------------")
    }
})