import {test, expect} from '@playwright/test'
import {LoginPage} from '../../pages/loginPage.js'
import {clasName} from '../../pages/sample.js'

import data from '../../testData/Credentials.json';

test('check if user can login with valid username&password', async ({ page }) => {

    //await expect(page.locator("h1[class='my-4']")).toBeVisible();

    const lin = new LoginPage(page);
    await lin.login(data.url,data.password,data.username);

    let elementShopName = page.locator("h1[class='my-4']");
    await expect(elementShopName).toBeVisible();

    if (!(await elementShopName.isVisible()))
    {
        console.log("Element is visisbale")
    }
    else if(elementShopName.isVisible())
    {
        console.log("Element is visisble")
    }
    let x= await elementShopName.textContent()
    
    console.log(x)
    expect(x).toEqual("Shop Name")

});

test('Add to cart', async ({ page }) => {
    const lin = new LoginPage(page);
    await lin.login(data.url,data.password,data.username);

    let itemTitle=await page.locator("//h4[@class='card-title']");
    let count=await itemTitle.count();
    let addButton=await page.locator("button.btn.btn")

    for (let i=0;i<count;i++){
        let x=await itemTitle.nth(i).textContent();
        if(x.includes("Nokia"))
        {
            console.log("Clicking add to cart for ",await itemTitle.nth(i).textContent())
            await addButton.nth(i).click();
        }
    }

    await page.waitForTimeout(10000)

});

test('Hello this is test sample', async ({ page }) => {
    const re = new clasName(page);
    re.printF();

});