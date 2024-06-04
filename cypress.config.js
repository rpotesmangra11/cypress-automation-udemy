const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    username: 'potesmangrar11@gmail.com',
    password: 'Soccer@199008' 
  },
  projectId: "vz8ieh",
  reporter: 'cypress-mochawesome-reporter',
  // reportFilename: "[status]_[datetime]-report",
  // video: false,
  retries: 0,
  // reporterOptions: {
  //   reportDir: 'test-report',
  //   charts: true,
  //   reportPageTitle: 'custom-title',
  //   embeddedScreenshots: true,
  //   inlineAssets: true,
  //   saveAllAttempts: false,
  //   ignoreVideos: true,
  //   videoOnFailOnly: false,
  e2e: {
    baseUrl: 'https://www.letskodeit.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const username = process.env.APP_USERNAME;
      const password = process.env.APP_PASSWORD;

      config.env = {username, password}
      return config,
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: [
    'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    'cypress/e2e/**/*.js'  // Include all .js files
    ]
  },
});
