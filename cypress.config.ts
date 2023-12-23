import { defineConfig } from "cypress";

export default defineConfig({
  pageLoadTimeout: 60000,
  e2e: {
   // baseUrl: 'http://localhost:3000/',
    setupNodeEvents(on, config) {
      
    },
  },
});
