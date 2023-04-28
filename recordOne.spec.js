import { test, expect, chromium } from '@playwright/test'

test('test', async ({ page }) => {
  const browser = await chromium.launch({
    slowMo:500,
    headless: false
  });
  await page.goto('https://www.booking.com/');
  await page.getByPlaceholder('Where are you going?').click();
  await page.getByPlaceholder('Where are you going?').fill('dubai');
  await page.getByRole('button', { name: 'Dubai Dubai Emirate, United Arab Emirates' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'Car rentals' }).click();
  await page.getByRole('img', { name: 'Yes Rent a Car. logo' }).click();
  await page.getByRole('link', { name: 'Airport taxis' }).click();
  await page.getByRole('link', { name: 'Attractions' }).click();
  await page.getByTestId('search-input-field').click();
  await page.getByTestId('search-input-field').fill('something');
});

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').click();
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#user-name').press('Tab');
  await page.locator('#password').fill('secret_sauce');
  await page.pause();
  await page.locator('#password').press('Enter');
  if(await page.$('#item_4_title_link > div')){
    await page.locator('#item_4_title_link > div').click();
  }
});

test.afterAll(async ({ page }) => {
  await page.pause();
  await page.close();
});