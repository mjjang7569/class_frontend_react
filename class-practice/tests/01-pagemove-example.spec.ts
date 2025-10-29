import { test, expect } from '@playwright/test';

test('페이지이동 시나리오', async ({ page }) => {
  await page.goto('http://localhost:3000/section23/23-04-playwright-e2e-test');
  await page.click('text=페이지 이동하기');
  await expect(page).toHaveURL(
    'http://localhost:3000/section23/23-04-playwright-e2e-test-moved'
  );
  await expect(page.locator('h1')).toContainText('철수야 놀자');
});
