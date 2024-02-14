const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 900,
    viewportWidth: 1400,
    video: true,
    chromeWebSecurity: false,
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
    defaultCommandTimeout : 10000,
    // watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
