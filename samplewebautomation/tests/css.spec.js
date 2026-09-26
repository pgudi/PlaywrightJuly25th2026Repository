import {test, expect} from "@playwright/test"

test("Absolute CSS ",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("css=html body div form input").first().fill("demoUser1")
    await page.waitForTimeout(2000)
})

//Case 1: Identify the Element based on tagName.
test("Identify the Element based on tagName",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("css=input").first().fill("demoUser2")
    await page.waitForTimeout(2000)
})

//Case 2: Identify the Element based on tagName with id attribute value
test("Identify the Element based on tagName with id attribute value",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("css=input#pwd1pass1word1").fill("Welcome12345")
    await page.waitForTimeout(2000)
})

//Case 3:  Identify the Element based on  id attribute value
test("Identify the Element based on  id attribute value",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("css=#pwd1pass1word1").fill("Welcome12345678")
    await page.waitForTimeout(2000)
})

//Case 4: Identify the Element based on tagName with class attribute value
test("Identify the Element based on tagName with class attribute value",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("css=input.pass1word1").fill("Password123")
    await page.waitForTimeout(2000)
})


//Case 5: Identify the Element based on class attribute value
test("Identify the Element based on class attribute value",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("css=.pass1word1").fill("Password789")
    await page.waitForTimeout(2000)
})

//Case 6: Identify the Element based on tagName with attributeName and value
test("Identify the Element based on tagName with attributeName and value",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("css=input[name='windows']").click()
    await page.waitForTimeout(2000)
})

//Case 7: Identify the Element based on tagName with Multiple attributeName and value
test("Identify the Element based on tagName with Multiple attributeName and value",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("css=input[type='radio'][name='chrome']").click()
    await page.waitForTimeout(2000)
})

//Case 8: Identify the Element Based on Partial Matching of Attribute Value
test("Identify the Element Based on Partial Matching of Attribute Value",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    //await page.locator("css=input[id ^= 'rad2']").click()
    await page.locator("css=input[id *= 'rad2']").click()
    await page.waitForTimeout(2000)
})

//Case 9: Identify the Element based on tagName with attribute Name
// Find Number of Links in the Application
test("Identify the Element based on tagName with attribute Name 01",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    const oLinks=await page.$$("css=a[href]")
    console.log("Number of Link in the Application :"+oLinks.length)
    await page.waitForTimeout(2000)
})

// Display All Link Names in the Application
test("Identify the Element based on tagName with attribute Name 02",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    const oLinks=await page.$$("css=a[href]")
    for(let link of oLinks){
        let linkname=await link.textContent()
        console.log("Link Name :"+linkname)
    }
    await page.waitForTimeout(2000)
})

// Click on Sepcific Link in the Application
test("Identify the Element based on tagName with attribute Name 03",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    const oLinks=await page.$$("css=a[href]")
    for(let link of oLinks){
        let linkname=await link.textContent()
        if(linkname.startsWith("S G")){
            await link.click()
            break
        }
    }
    await page.waitForTimeout(2000)
})

//Case 10: Identify Element using nth child concept
test.only("Identify Element using nth child concept",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("css=form#frm3 :nth-child(4)").fill("DemoUser04")
    await page.waitForTimeout(2000)
})