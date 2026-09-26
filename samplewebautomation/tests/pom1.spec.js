const {test, expect} = require("@playwright/test")
const {LoginPage} = require("./../pages1/loginpage")
const {HomePage} = require("./../pages1/homepage")

test("Login and Logout using Page Object Model", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    // Login Object Creation and Perform Login Action
    let login=new LoginPage(page)
    await login.setUserNameField("pgudi")
    await login.setPasswordField("pgudi")
    await login.clickOnsingInbutton()
    await page.waitForTimeout(3000)
    // Home Object Creation and Perform Logout Action
    let home=new HomePage(page)
    await expect(home.homepageValidationMessage).toHaveText("S G Software Testing Institute")
    await home.clickOnLogoutLink()
    await page.waitForTimeout(3000)
    await expect(page).toHaveTitle("S G Software Testing Institute")
})