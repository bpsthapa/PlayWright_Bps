// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  //changing the default timeout which was 30
  timeout: 20*1000,
  //this is for assertion timeout only
    expect: { 
      timeout: 40*1000,
    },
  /* Run tests in files in parallel */
  fullyParallel: false,
  reporter: [
    ['list'],
    ['allure-playwright'],
    ['html']
  ],

  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    headless: false,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});

