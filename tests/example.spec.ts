import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Login/);
});

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:5173/signup');

  // Click the get started link.
  // await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*signup/);
});
