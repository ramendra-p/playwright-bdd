import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

// This links your business logic (Gherkin) to your technical logic (Steps)
const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: 'steps/*.ts',
});

export default defineConfig({
  testDir,
  reporter: [['html', { open: 'never' }]], // HTML report is vital for CI
  use: {
    baseURL: 'https://saucedemo.com',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure', // Crucial for debugging large suites in CI
    headless: true,
  },
  // Industry standard: Use workers to run tests in parallel
  workers: process.env.CI ? 2 : undefined, 
});
