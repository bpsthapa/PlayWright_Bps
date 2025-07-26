const { text, expect } = require('@playwright/test')


exports.name=class SearchName{

    constructor(page){
        this.page=page
    }


    async search(){
        console.log("Performing search")
        await this.page.fill('.gLFyf', 'BIpin Thapoa');
        await this.page.click("div[class='hvhmMe']");
        await this.page.waitForTimeout(4000);
        
    }
}