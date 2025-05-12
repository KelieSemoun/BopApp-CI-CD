import { defineConfig } from 'cypress';
import * as coverageTask from '@cypress/code-coverage/task';
const codeCoverageTask = (coverageTask as any).default ?? coverageTask;

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    supportFile: 'cypress/support/e2e.ts'
  }
});
