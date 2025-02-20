import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
	const locator = page.locator('h1');
	await expect(locator).toBeVisible();
	await expect(locator).toContainText('Hi');
});
