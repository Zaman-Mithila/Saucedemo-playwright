 SauceDemo Automation Project

Overview
This project is an automation testing suite for https://www.saucedemo.com/ using Playwright.

All test cases were executed manually and automated using Playwright framework


Test Scenarios
 Q1: Locked Out User Login
- Login with locked_out_user
- Verify error message


 Q2: Standard User Checkout Flow
- Login with standard_user
- Reset App State
- Add 3 products to cart
- Go to checkout page
- Verify product names and total price
- Complete purchase journey
- Verify successful order message
- Reset App State again
- Logout

Q3: Performance Glitch User Flow
- Login with performance_glitch_user
- Reset App State
- Filter by name (Z to A)
- Add first product to cart
- Checkout
- Verify product names and total price
- Complete purchase journey
- Verify success message
- Reset App State
- Logout


 How to Run Project
 - npm init -y
 - npm install -D @playwright/test
 - npx playwright test
 - allure serve allure-results
 
