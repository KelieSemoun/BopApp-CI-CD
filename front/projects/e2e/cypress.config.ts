import { defineConfig } from 'cypress'

export default defineConfig({
  videosFolder: 'projects/e2e/cypress/videos',
  screenshotsFolder: 'projects/e2e/cypress/screenshots',
  fixturesFolder: 'projects/e2e/cypress/fixtures',
  projectId: 'd6gihf',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./projects/e2e/cypress/plugins/index.js')(on, config)
    },
    specPattern: 'projects/e2e/cypress/integration/**/*.{js,jsx,ts,tsx}',
    supportFile: 'projects/e2e/cypress/support/index.ts',
    baseUrl: 'http://localhost:4200',
  },
})
