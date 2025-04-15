import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',  // Directory where test files are stored
  timeout: 30000, // Set timeout for each test (30s)
  expect: {
    timeout: 5000, // Timeout for Playwright assertions (5s)
  },
  fullyParallel: true, // Run tests in parallel
  retries: 2, // Number of retries on failure
  reporter: [
    ['html', { outputFolder: 'test-results' }], // Generates an HTML report
    ['json', { outputFile: 'test-results/report.json' }], // JSON report
    ['junit', { outputFile: 'test-results/results.xml' }] // JUnit report for CI/CD
  ],
  use: {
    browserName: 'chromium',  // Change to 'firefox' or 'webkit' if needed
    headless: false, // Run in UI mode (change to true for headless)
    viewport: { width: 1280, height: 720 }, // Set viewport size
    ignoreHTTPSErrors: true, // Ignore HTTPS errors in insecure sites
    baseURL: "https://restful-booker.herokuapp.com",
    extraHTTPHeaders: {               
      Accept: "application/json",
      "Content-Type": "appplication/json"           // second way to provide header by using extrahtpheader
  },
    screenshot: 'on', // Capture screenshots on failure
    video: 'retain-on-failure', // Record videos on failure
    trace: 'on', // Capture traces for debugging
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    // {
    //   name: 'firefox',
    //   use: { browserName: 'firefox' },
    // },
    // {
    //   name: 'webkit',
    //   use: { browserName: 'webkit' },
    // },
  ],
  outputDir: 'test-results/', // Folder to store test artifacts
  workers: 4, // Number of parallel workers
});
