const { test, expect } = require('@playwright/test');

test('Q2 Purchase Test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  // login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // menu open
  await page.click('#react-burger-menu-btn');

  // reset app state
  await page.click('#reset_sidebar_link');

  // close menu
  await page.click('#react-burger-cross-btn');

  // add 3 items
  await page.click('#add-to-cart-sauce-labs-backpack');
  await page.click('#add-to-cart-sauce-labs-bike-light');
  await page.click('#add-to-cart-sauce-labs-bolt-t-shirt');

  // cart
  await page.click('.shopping_cart_link');

  // verify product
  await expect(page.locator('.inventory_item_name').first())
    .toContainText('Sauce Labs Backpack');

  // checkout
  await page.click('#checkout');

  // information
  await page.fill('#first-name', 'Farjana');
  await page.fill('#last-name', 'Mithila');
  await page.fill('#postal-code', '1234');

  await page.click('#continue');

  // verify total
  await expect(page.locator('.summary_total_label'))
    .toContainText('Total');

  // finish
  await page.click('#finish');

  // success message
  await expect(page.locator('.complete-header'))
    .toContainText('Thank you for your order!');

  // menu
  await page.click('#react-burger-menu-btn');

  // reset
  await page.click('#reset_sidebar_link');

  // logout
  await page.click('#logout_sidebar_link');

});