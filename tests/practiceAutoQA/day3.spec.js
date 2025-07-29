import {test, expect} from '@playwright/test';
import data from '../../testData/Credentials.json';

//Postive
test("Check files is being updated to system", async ({page}) => {
    await page.goto(data.url);
    await page.waitForTimeout(3000);
    await page.setInputFiles("css","testFiles/testFile.txt")

});

//Negative
test("Check file upload functionality without selecting file", async ({page}) => {
    let submit_Css="button[type='submit']"
    let errorMsg_Css="//div[text()='uploaded successfuly upload.']";

    await page.goto(data.url);
    await page.click(submit_Css);

    let Erromessage=await page.locator(errorMsg_Css)
    expect(Erromessage).toBeVisible();
    await page.waitForTimeout(3000);
});