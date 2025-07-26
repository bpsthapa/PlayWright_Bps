exports.secSec=class secSection {
    constructor(page) {
        this.page = page;
    }

    async alertExample() {
        await this.page.fill("//input[@id='name']","BipinThapa");
        await this.page.click("//input[@id='alertbtn']");
        
    }
}

//module.exports = { secSection };
