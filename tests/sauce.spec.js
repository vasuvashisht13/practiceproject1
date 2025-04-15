import { test, expect } from '@playwright/test';

test('Sauce test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await expect(page.locator('form')).toMatchAriaSnapshot(`
    - textbox "Username": standard_user
    - textbox "Password": secret_sauce
    - button "Login"
    `);
  await page.locator('[data-test="login-button"]').click();
  await page.locator('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});