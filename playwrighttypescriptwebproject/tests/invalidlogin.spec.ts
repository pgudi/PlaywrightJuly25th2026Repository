import {test, expect} from "@playwright/test"

test("Login with Invalid Credentials", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    await page.locator("//input[@name='username']").fill("pgudi123")
    await page.locator("//input[@name='password']").fill("pgudi123")
    await page.locator("//button[normalize-space()='Sign In']").click()
    const errorMessage:any=await page.locator("//p[normalize-space()='Invalid username or password']").textContent()
    console.log("Error Message :"+errorMessage)
    await expect(page.locator("//p[normalize-space()='Invalid username or password']")).toHaveText("Invalid username or password")

})