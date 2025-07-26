import { test, expect } from '@playwright/test';

exports.fSec=class firstSection{
    constructor(page){
        this.page=page
    }

    async radio(page){
        await this.page.click("//input[@value='radio2']");
    }

    async suggestion(country){
        let autoComplet="//input[@id='autocomplete']"
        await this.page.fill(autoComplet,country)
        await this.page.press(autoComplet, 'ArrowDown');
        await this.page.press(autoComplet, 'Enter');
    }

    async dropdown(){
        let dropDown="#dropdown-class-example"
        await this.page.selectOption(dropDown,"option3")
        await this.page.selectOption(dropDown,{index:2})
        await this.page.selectOption(dropDown,{label:"Option3"})
    }

    async checkbox(){
        await this.page.click("//input[@id='checkBoxOption3']");
    }

}