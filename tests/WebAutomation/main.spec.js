const { test, expect } = require ('@playwright/test')
const { myKeys } = require ('./keys.js')
const {name} = require('./search.js')

const url="https://www.google.com/";


test("Google Search", async ({page}) => {
    
    const keys=new myKeys(page);
    await keys.visitUrl(url)

    const sear=new name(page);
    await sear.search();

}); 