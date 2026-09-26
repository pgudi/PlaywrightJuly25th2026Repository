const {test, expect} = require("@playwright/test")

test("Inbuilt Locators in playwright", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(3000)
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole('button',{name : 'Login'}).click()
    await page.waitForTimeout(3000)
    await page.getByAltText("profile picture").first().click()
     await page.waitForTimeout(1000)
     await page.getByText("Logout").click()
     await page.waitForTimeout(3000)
})