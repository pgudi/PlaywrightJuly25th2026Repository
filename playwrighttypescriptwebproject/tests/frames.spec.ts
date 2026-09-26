import {test, expect} from "@playwright/test"

test("Handle Frames in the Application", async({page})=>{
    await page.goto("https://docs.oracle.com/javase/8/docs/api/")
    await page.waitForTimeout(3000)
    //first Frame
    const oFrame1=await page.frameLocator("//frame[@name='packageListFrame']")
    await oFrame1.locator("//a[text()='java.awt']").click()
    await page.waitForTimeout(3000)
    //Second Frame
    const oFrame2=await page.frameLocator("//frame[@name='packageFrame']")
    await oFrame2.locator("//a/span[text()='ActiveEvent']").click()
    await page.waitForTimeout(3000)
    //Third Frame
    const oFrame3=await page.frameLocator("//frame[@name='classFrame']")
    const UITextContent=await oFrame3.locator("//div[@class='description']//div[1]").textContent()
    console.log(UITextContent)
    await page.waitForTimeout(3000)
})