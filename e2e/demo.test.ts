import { expect, test } from '@playwright/test';

test('home page has expected header, main and footer', async ({ page }) => {
	await page.goto('/');

	const header = page.locator('header');
	await expect(header).toBeVisible();

	const main = page.locator('main');
	await expect(main).toBeVisible();

	const footer = page.locator('footer');
	await expect(footer).toBeAttached();
});
