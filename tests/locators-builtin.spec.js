import { request } from "node:http"

 //const {test expect } =  request ('@playwreight/test')
const { test, expect } = require('@playwright/test');

 test ('Builtinlocator', async ({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

 })