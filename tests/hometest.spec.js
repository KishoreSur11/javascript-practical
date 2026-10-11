const {test, expect}=require('@playwright/test');
 
test('home page',async({page})=>{
 
await page.goto('https://www.demoblaze.com/index.html');
 
const pagetitle = await page.title();
console.log('page title is:', pagetitle);
 
await expect(page).toHaveTitle('STORE');
 
const pageURL = await page.url();
console.log('page url is:',pageURL);
 
await expect (page).toHaveURL('https://www.demoblaze.com/index.html');
 
await page.close();
 
})