import {test,expect} from "@playwright/test"
const testdata = require("./../datafiles/login1.json")
const testdata1 = require("./../datafiles/multiplelogin.json")

test("Login logout functionality Validation", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    // Login Action
    await page.locator("//input[@name='username']").fill(testdata.username)
    await page.locator("input[name='password']").fill(testdata.password)
    await page.locator("//button[normalize-space()='Sign In']").click()
    await page.waitForTimeout(3000)
    await expect(page.locator("//h2[normalize-space()='S G Software Testing Institute']")).toHaveText("S G Software Testing Institute")
    // Logout Action
    await page.locator("//button[normalize-space()='Logout']").click()
    await expect(page.locator("//img[@alt='Logo']")).toBeVisible()
})

test.only("Login logout functionality uisng Multiple Params", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    // Login Action
    for(let data of testdata1){
        await page.locator("//input[@name='username']").fill(data.username)
        await page.locator("input[name='password']").fill(data.password)
        await page.locator("//button[normalize-space()='Sign In']").click()
        await page.waitForTimeout(3000)
        await expect(page.locator("//h2[normalize-space()='S G Software Testing Institute']")).toHaveText("S G Software Testing Institute")
        // Logout Action
        await page.locator("//button[normalize-space()='Logout']").click()
        await expect(page.locator("//img[@alt='Logo']")).toBeVisible()
        await page.waitForTimeout(3000)
    }
    
})