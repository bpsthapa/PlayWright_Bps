import { test, expect } from '@playwright/test';
import { secSec } from '../../pages/secondsection.js';
import { fSec } from '../../pages/firstSection.js'
import data from '../../testData/info.json';

//const {fSec} = require('./firstSection.js')
//const {second} = require('./secondsection.js')
//const data=JSON.parse(JSON.stringify(require("../../testData/info.json")));

test.beforeEach(async ({ page }) => {
    await page.goto(data.URL);
});

test.describe('testcase', () => {

    test("Test of 1st section", async ({ page }) => {
        const fir = new fSec(page);

        await fir.suggestion(data.country);
        await fir.dropdown();
        await fir.checkbox();
        await page.waitForTimeout(10000);
    })

    test("Test on second section", async ({ page }) => {
        await page.fill("//input[@id='name']","BipinThapa");

        page.on('dialog', async dialog => {
            let a=dialog.message();
            //await dialog.accept();
            await dialog.accept();
        });

        //await page.click('#alertbtn');
        await page.click("//input[@id='confirmbtn']");
        await page.reload()

        await page.waitForTimeout(10000);
        await page.click("//input[@id='alertbtn']");
    });

    test('Browser Tabs', async ({ page }) => {
        await page.click("#opentab")
        //Nagive to new tabs

        await page.click("#openwindow")
        await page.waitForTimeout(10000);
    });

});