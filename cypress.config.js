const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    
    defaultBrowser: "chrome",
    baseUrl: "https://opensource-demo.orangehrmlive.com",
  //  specPattern: "cypress/e2e/**/*.dbsqa.{js,jsx,ts,tsx}",
    video: true,
    defaultCommandTimeout: 10000, //default value: 4000 ms 
    //pageLoadTimeout: 140000, //default value: 60000 ms 
    // viewportWidth: 390,//1920, default : 1000
    //  viewportHeight: 844,//1080, default: 660
    retries: { "openMode": 2, "runMode": 1 },
    //'videosFolder': "cypress/recordedvideos",
    env:{

  "username": "Admin",
  "password": "admin123"
},
  watchForFileChanges : false,
  setupNodeEvents(on, config) {
    // implement node event listeners here
    require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
