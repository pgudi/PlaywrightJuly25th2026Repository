import {test, expect} from "@playwright/test"

test("Identify UI Element using Proeprty", async({page})=>{
    await page.goto("http://localhost/login.do")
    await page.waitForTimeout(3000)
    await page.locator("id=username").fill("admin")
    await page.waitForTimeout(3000)
})