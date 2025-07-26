import { test, expect } from '@playwright/test';

exports.myKeys=class main{
    constructor(page){
        this.page=page
    }

    async visitUrl(url){
        await this.page.goto(url);
        await this.page.waitForTimeout(3000);

    }

    async Search(){

    }

}

//module.exports = new main();