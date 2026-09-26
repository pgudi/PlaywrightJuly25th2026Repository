# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: alertcustomer.spec.js >> Create Customer and Handle Alert during Delete Customer
- Location: tests\alertcustomer.spec.js:4:1

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | // Navigate URL -> Login -> CreateCustomer -> DeleteCustomer -> Logout 
  2  | const {test, expect} = require("@playwright/test")
  3  | 
  4  | test("Create Customer and Handle Alert during Delete Customer", async({page})=>{
  5  |     await page.goto("https://sgtestinginstituteapp.onrender.com/")
> 6  |     await page.waitForTimeout(3000)
     |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  7  |     //Login Action
  8  |     await page.locator("//input[@name='username']").fill("pgudi")
  9  |     await page.locator("//input[@name='password']").fill("pgudi")
  10 |     await page.locator("//button[normalize-space()='Sign In']").click()
  11 |     await page.waitForTimeout(3000)
  12 |     await expect(page.locator("//h2[normalize-space()='S G Software Testing Institute']")).toHaveText("S G Software Testing Institute")
  13 |     await page.locator("//a[normalize-space()='Customers']").click()
  14 |     await page.locator("//a[normalize-space()='Add Customer']").click()
  15 |     await expect(page.locator("//h3[normalize-space()='Add Customer']")).toHaveText("Add Customer")
  16 |     await page.locator("//input[@placeholder='Enter Customer Name']").fill("auto_services1")
  17 |     await page.locator("input[placeholder='Enter EmailId']").fill("desktopservices@sg.com")
  18 |     await page.locator("input[placeholder='Enter Location']").fill("New York")
  19 |     await page.locator("input[placeholder='Enter Description']").fill("Provies Desktop Services")
  20 |     await page.waitForTimeout(3000)
  21 |     await page.locator("//button[normalize-space()='Save']").click()
  22 |     await page.waitForTimeout(3000)
  23 |     await expect(page.locator("//td[normalize-space()='auto_services1']")).toBeVisible()
  24 |     page.on("dialog", async(AlertDialog)=>{
  25 |         const message=await AlertDialog.message()
  26 |         console.log("Alert MEssage :"+message)
  27 |         await AlertDialog.accept()
  28 |     })
  29 | 
  30 |     await page.locator("//td[text()='auto_services1']/following-sibling::td/following-sibling::td/following-sibling::td/following-sibling::td/button[2]").click()
  31 |     await page.waitForTimeout(3000)
  32 |     await expect(page.locator("//td[normalize-space()='auto_services1']")).not.toBeVisible()
  33 | })
```