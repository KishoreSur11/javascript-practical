const { defineConfig } = require('@playwright/test');
const { defineBddConfig } = require('playwright-bdd');

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: ['steps/**/*.js'],
});

module.exports = defineConfig({
  testDir,
});