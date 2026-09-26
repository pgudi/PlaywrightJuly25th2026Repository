import {test, expect} from "@playwright/test"

test("Handle Keyboard operation", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    await page.keyboard.press("Tab")
    await page.keyboard.type("PLAYWRIGHT AUTOMATION")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Control+A")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Control+C")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Backspace")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Control+V")
    await page.waitForTimeout(2000)
})