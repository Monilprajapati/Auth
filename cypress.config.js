const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}', // Adjust if your specs are in a different location
    baseUrl: 'http://localhost:3000', // Adjust to your app's base URL
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
});