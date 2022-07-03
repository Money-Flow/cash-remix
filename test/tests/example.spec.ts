import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto(process.env.DEPLOYMENT_PATH || 'localhost:3000'   );
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});
