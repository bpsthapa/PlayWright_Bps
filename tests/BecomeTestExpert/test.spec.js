import { test, expect, page} from '@playwright/test';
import data from "../../testData/guru.json";
import { link } from 'fs';

test('testcase', async ({ page }) => {
    await page.goto(data.url2);

    expect(page).toHaveTitle("Delete Customer")

    const a = await page.title();
    console.log(a);

    await page.fill("input[name='cusid']","BipinThapa");
    await page.click('input[name="submit"]');
    await page.waitForTimeout(3000);
});