import {test, expect} from "@playwright/test"

test("Handle Mouse operation using hover", async({page})=>{
    await page.goto("https://amazon.in/")
    await page.waitForTimeout(3000)
    await page.locator("//span[@class='nav-line-2 ']").hover()
    await page.waitForTimeout(3000)
   
})

test.only("Handle Mouse operation using Scroll", async({page})=>{
    await page.goto("https://www.w3schools.com/")
    await page.waitForTimeout(3000)
    await page.locator("//a[normalize-space()='See all certificates']").scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)
   
})