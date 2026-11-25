import { envConfig } from './config/envConfig.js';
// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Fail on CI if test.only is accidentally used
  forbidOnly: !!process.env.CI,

  // Retry failed tests on CI
  retries: process.env.CI ? 2 : 0,

  // Use one worker on CI
  workers: process.env.CI ? 1 : undefined,

  // HTML test report
  // reporter: 'html',

  reporter: [
    [
      'html',
      {
        outputFolder: `playwright-report/${envConfig.name}`,
        open: 'never',
      },
    ],
  ],

  // Shared settings for all tests
  use: {
    // Base URL for the application
    // baseURL: 'https://www.saucedemo.com/',

    baseURL: envConfig.baseURL,

    // Collect trace when retrying failed tests
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  // Browser projects
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
