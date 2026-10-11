const { defineConfig, devices } = require('@playwright/test');
 
module.exports = defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.js',
 
  use: {
    ...devices['Desktop Chrome'],
    headless: false,
  },
 
  reporter: 'html',
});