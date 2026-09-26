import {test, expect} from '@playwright/test'

test("Scroll Mouse till A Specific UI Element", async({page})=>{
    await page.goto("https://www.w3schools.com/")
    await page.waitForTimeout(5000)
    await page.locator("//a[normalize-space()='Learn Python']").scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)
    await page.screenshot({path:'w3school_learnpython.png'})
    await page.waitForTimeout(2000)
})