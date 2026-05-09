import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture'; // We'll create this next
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

Given('I am on the login page', async ({ loginPage }) => {
  await loginPage.navigate();
});

When('I login with username {string} and password {string}', async ({ loginPage }, user, pass) => {
  await loginPage.login(user, pass);
});

Then('I should see the inventory page', async ({ page }) => {
  await expect(page).toHaveURL(/.*inventory.html/);
});
