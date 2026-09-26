import {test, expect} from "@playwright/test"

test("Absolute XPath ",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=html/body/div/form/input").first().fill("demoUser1")
    await page.waitForTimeout(2000)
})

//Case 1: Identify the Element based on TagName
test("Relative XPath: Based on TagName ",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//input").first().fill("demoUser2")
    await page.waitForTimeout(2000)
})


//Case 2: Identify the Element based on tagName with index
test("Relative XPath: Based on TagName with index ",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//input[2]").first().fill("Welcome12345")
    await page.waitForTimeout(2000)
})

//Case 3: Identify the Element based on tagName with attribute name and value
test("Relative XPath: Based on TagName with attrubutename and value ",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//input[@name='pass1word1']").fill("Welcome12345")
    await page.waitForTimeout(2000)
})

//Case 4: Identify the Element based on irrespective of tagname using attribute name and value
test("Relative XPath: Based on attrubutename and value ",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//*[@class='pass1word1']").fill("Welcome12345")
    await page.waitForTimeout(2000)
})

//Case 5: Identify the Element based attribute value alone
test("Relative XPath: Based on attrubutevalue alone",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//*[@*='pwd1pass1word1']").fill("WelcomeXYZ")
    await page.waitForTimeout(2000)
})

//Case 6: Identify the Element based on Multiple Attribute Name and Value Combinations
test("Relative XPath: Based on Multiple attrubutename and value",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//input[@name='windows'][@type='checkbox']").click()
    await page.waitForTimeout(2000)
})

// Case 7:  Identify the Element based on Multiple Attribute Name and Value Combinations using or operator
test("Relative XPath: Based on Multiple attrubutename and value using OR Operator",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//input[@name='windows' or @type='checkbox']").click()
    await page.waitForTimeout(2000)
})

// Case 8:  Identify the Element based on Multiple Attribute Name and Value Combinations using and operator
test("Relative XPath: Based on Multiple attrubutename and value using and Operator",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//input[@name='chrome' and @type='radio']").click()
    await page.waitForTimeout(2000)
})

// Case 9: Identify the Element based on Partial Matching of Attribute Value
test("Relative XPath: Based on Partial Matching of Attribute Value",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    //await page.locator("xpath=//input[starts-with(@id,'chk2')]").click()
    await page.locator("xpath=//input[contains(@id,'k2l')]").click()
    await page.waitForTimeout(2000)
})

// Case 10: Identify the Element based on tagName with attributeName
// Find Number Links in the Applkication
test("Relative XPath: Based on tagName With attributeName 01",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    const oLinks=await page.$$("//a[@href]")
    console.log("Number of Links :"+oLinks.length)
    await page.waitForTimeout(2000)
})
//Display All Link Names in the Applkication
test("Relative XPath: Based on tagName With attributeName 02",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    const oLinks=await page.$$("//a[@href]")
    for(let i=0;i<oLinks.length;i++){
        let linkname=await oLinks[i].textContent()
        console.log("Link Name :"+linkname)
    }
    await page.waitForTimeout(2000)
})

//Click on Specific Link in the Applkication
test("Relative XPath: Based on tagName With attributeName 03",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    const oLinks=await page.$$("//a[@href]")
    for(let i=0;i<oLinks.length;i++){
        let linkname=await oLinks[i].textContent()
        if(linkname.endsWith("Testing")){
            await oLinks[i].click()
            break
        }
    }
    await page.waitForTimeout(2000)
})

// Case 11: Identify the Element based on Text Content
test("Relative XPath: Based on Text Content",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//a[text()='S G Software Testing']").click()
    await page.waitForTimeout(2000)
})

// Case 12: Identify the Element based on Text Content for nomalize-space
test("Relative XPath: Based on Text Content with nomalize-space",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//a[normalize-space()='S G Software Testing']").click()
    await page.waitForTimeout(3000)
})


//Case 13: Identify the Element based on Partial Text Content
test.only("Relative XPath: Based on Partial Text Content",async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//a[contains(text(),'S G')]").click()
    await page.waitForTimeout(3000)
})
