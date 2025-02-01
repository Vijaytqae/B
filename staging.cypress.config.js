const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    video: true,
    defaultCommandTimeout: 10000, //default value: 4000 ms 
    pageLoadTimeout: 100000, //default value: 60000 ms 
    // viewportWidth: 390,//1920, default : 1000
    //  viewportHeight: 844,//1080, default: 660
    retries: { "openMode": 2, "runMode": 2 },
    env:{

  "username": "Nag",
  "password": "arjun@123"
},
  setupNodeEvents(on, config) {
    // implement node event listeners here
    require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
