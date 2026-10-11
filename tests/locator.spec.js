//const {test, expect} = require ('@playwright/test');
import  {test, expect} from '@playwright/test'
test ('locators', async ({page})=>{
 
await page.goto('https://www.demoblaze.com/index.html');
 
// click on loginpage - property
//await page.locator('id=login2').click()
await page.click('id=login2')
 
//provide username - css
//wait page.locator('#loginusername').fill('abc123')
await page.fill('#loginusername','prasanna1')
//await page.type('#loginusername','prasanna1')
 
//provide password - css
await page.fill("input[id='loginpassword']",'password')
 
//click on login button - xpath
await page.click("//button[@onclick='logIn()']")
 
// verifi logout presence - xpath
const logoutlink=await page.locator("//button[@onclick='logIn()']")
 
await expect(logoutlink).toBeVisible();
await page.close()
})