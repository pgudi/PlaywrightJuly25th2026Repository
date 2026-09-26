import {test, expect} from "@playwright/test"
import { LoginPage } from "../pages/loginpage"
import { HomePage } from "../pages/homepage"
test("Login and Logout Functionality", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    // Login Action
    const oLogin=new LoginPage(page)
    oLogin.setUserNameTextField("pgudi")
    oLogin.setPasswordTextField("pgudi")
    oLogin.clickSignInButton()
    await page.waitForTimeout(3000)
    await expect(page).toHaveURL("https://sgtestinginstituteapp.onrender.com/home")
    // Home Action
    const oHome=new HomePage(page)
    oHome.clickLogoutLink()
    await expect(page).toHaveURL("https://sgtestinginstituteapp.onrender.com/login")
})