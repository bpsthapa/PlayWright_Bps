// loginPage.js
import { test, expect } from '@playwright/test';
import data from '../testData/Credentials.json';

export class LoginPage {

    constructor(page) {
        this.page = page;
    }

    async login(url,password,username) {
        console.log("Opening URL...");
        await this.page.goto(url);

        await this.page.fill("//input[@name='username']", username);
        await this.page.fill("//input[@id='password']", password);

        await this.page.click("(//span[@class='checkmark'])[2]");
        await this.page.click("#okayBtn");
        await this.page.click("#terms");
        console.log("Clicking OK from popup...");

        await this.page.selectOption("select.form-control", "teach");
        console.log("Clicking on Sign in button...");

        const signInButton = this.page.locator("input.btn.btn-info.btn-md");
        await signInButton.click();

        await this.page.waitForTimeout(5000); // Consider replacing with proper waitForNavigation or waitForSelecto
    }

    async printt() {
       console.log("Hellpo tjis")
    }


}
