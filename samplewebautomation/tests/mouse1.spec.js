const {test, expect} = require("@playwright/test")

test("Mouse Hover Operation ", async({page})=>{
    await page.goto("https://www.icici.bank.in/")
    await page.waitForTimeout(5000)
    await page.locator("//span[normalize-space()='About']").hover()
    await page.waitForTimeout(3000)
    await page.locator("//a[normalize-space()='News room']").click()
    await expect(page.locator("//h1[normalize-space()='News Room']")).toBeVisible()
})