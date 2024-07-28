const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}', // Adjust if your specs are in a different location
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
});