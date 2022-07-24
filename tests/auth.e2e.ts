import { test, expect } from '@playwright/test';

  test('should be able to login', async ({page}) => {
    await page.goto(process.env.DEPLOYMENT_PATH || 'localhost:3000');

    await page.locator('text="Log In"').click();

    await page.fill('input[name="email"]', "test-user@gmail.com");
    await page.fill('input[name="password"]', '12345678');

    await page.locator('button', { hasText: 'Log In' }).click();

    expect(await page.locator('text="Notes')).toBeTruthy()
  })
