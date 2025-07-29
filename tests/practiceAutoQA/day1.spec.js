import { test } from "@playwright/test";

test("check if google search is working as expected", async ({page})=> {
    const url="https://www.google.com/";

    console.log("Opening url: " +url)
    await page.goto(url); 

    await page.fill("#APjFqb","Mi monitor")
    await page.press("Enter")
    await page.waitForTimeout(10000) //this in millisecond

});

