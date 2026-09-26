const {test, expect} = require("@playwright/test")
test.use({viewport:{width:1536, height:864}})

test("Login logout functionality Validation", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    let width=await page.viewportSize().width
    console.log("Width of the Current Browser window :"+width)
    let height=await page.viewportSize().height
    console.log("Height of the Current Browser window :"+height)
    // Login Action
    await page.locator("//input[@name='username']").fill("pgudi")
    await page.locator("input[name='password']").fill("pgudi")
    await page.locator("//button[normalize-space()='Sign In']").click()
    await page.waitForTimeout(3000)
    await expect(page.locator("//h2[normalize-space()='S G Software Testing Institute']")).toHaveText("S G Software Testing Institute")
    // Logout Action
    await page.locator("//button[normalize-space()='Logout']").click()
    await expect(page.locator("//img[@alt='Logo']")).toBeVisible()
})