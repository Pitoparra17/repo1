const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  retries: 1,//realiza en el intento 1 y el intento 2
  e2e: {
    setupNodeEvents(on, config) {
            allureWriter(on, config);
            return config;
    },
  },
});
