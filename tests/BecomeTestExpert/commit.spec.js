import { test, expect } from '@playwright/test';
import data from '../../testData/guru.json';

test.beforeEach(async ({ page }) => {
    console.log("Opening Url")
    await page.goto(data.url);
    expect(page).toHaveTitle("Delete CommitQuality - Test Automation Demo")
    await page.getByRole('link', { name: 'Practice' }).click();
});

test("testcase paractice", async ({ page }) => {
    await page.waitForTimeout(1000);

    await expect(page.locator(".container-text.extra-info")).toBeVisible();
    const timeTes = await page.getByRole('heading', { name: "Time testing" });

    await timeTes.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    await timeTes.dblclick();
});

test('Upload files', async ({ page }) => {
    const submitBtn_xpath = "//button[normalize-space()='Submit']";
    const chooseFileBtn_css = "#file-input";

    await page.getByRole('heading', { name: 'File Upload' }).click();
    const submitBtn = await page.locator(submitBtn_xpath);
    await submitBtn.click();

    let actualErrorMsg = await page.textContent("//div[@class='error-message']")
    console.log(actualErrorMsg);
    await expect(data.expectedErrorMessage).toContain(actualErrorMsg)

    //await page.setInputFiles("#file-input","testFiles/testFile.txt");

    page.once('dialog', async dialog => {
        expect(dialog.message()).toContain('uploaded');
        await dialog.accept(); // Accept the alert
    });

    await page.setInputFiles(chooseFileBtn_css, "testFiles/testFile.txt")
    await submitBtn.click();
});


test("Add prodcut validation", async ({page}) => {
    const productName="Iphone 16 pro max";

    await page.click("a:has-text('Add Product')")
    await page.getByPlaceholder("Enter a product name").fill(productName)
    await page.fill("input[placeholder='Enter a price']","1200")
    await page.fill("#dateStocked","2024-01-02")
    await page.click("button:has-text('Submit')")
    await Chekproduct(page,productName);

    console.log("Added product")

});

test("Add prodcut without price", async ({page}) => {

    await page.click("a:has-text('Add Product')")
    await page.getByPlaceholder("Enter a product name").fill("Iphone 16 pro max")
    //await page.fill("input[placeholder='Enter a price']","1200")
    await page.fill("#dateStocked","2024-01-02")
    await page.click("button:has-text('Submit')")
    await expect(page.locator("text=Price must not be empty and within 10 digits")).toBeVisible();
    await page.waitForTimeout(5000)
});

test.only('iframe Handle', async ({ page }) => {
    console.log("Handling iFrame")
    await page.getByRole('heading', { name: 'Iframes' }).click()
    
    let x = page.locator("iframe[title='Products']");
    await expect(x, "this is not visible").toBeVisible();
    
    const iframe = page.frameLocator("iframe[title='Products']");
    await iframe.locator("input[placeholder='Filter by product name']").fill("BipinThapa");
    await page.waitForTimeout(1000)
    await iframe.locator("input[placeholder='Filter by product name']").fill("");
    await page.waitForTimeout(1000)
    await iframe.locator("input[placeholder='Filter by product name']").fill("BipinThapa");
    await iframe.locator("(//button[@class='filter-button'])[1]").click();
    await page.waitForTimeout(5000)
    await iframe.getByRole("button",{name:"Filter"}).click;
    await iframe.getByRole("button",{name:"Resets"}).click;
    await page.waitForTimeout(5000)
});


async function Chekproduct(page, pName){
    console.log ("Checking if the product "+pName+ " is being listed in table")
    const pName_css="td[data-testid='name']";

    await page.getByRole('link', { name: 'Products' }).click();
    await page.fill("input[placeholder='Filter by product name']",pName);
    await page.getByRole('button',{name:'Filter'}).click();

    await page.waitForTimeout(1000)
    const searchProduct=await page.locator(pName_css);
    let count=await searchProduct.count();

    await console.log("Total count is:" +count);

    let found=false;
    for (let i=0; i<count; i++){   
        let text=await searchProduct.nth(i).textContent();
        console.log("The text is: ", text)
        if(text.includes(pName)){
            console.log("The newly product is listed in table")
            found=true;
            break;
        }
    }
    expect(found, "The added product is missing").toBe(true)

}