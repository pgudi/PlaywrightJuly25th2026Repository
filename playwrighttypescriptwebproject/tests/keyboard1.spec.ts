import {test, expect} from "@playwright/test"

test("Handle Keyboard operation", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    await page.keyboard.press("Tab")
    await page.keyboard.type("pgudi")
    await page.waitForTimeout(1000)
    await page.keyboard.press("Tab")
    await page.keyboard.type("pgudi")
    await page.waitForTimeout(1000)
    await page.keyboard.press("Tab")
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)
})