import {test , expect } from '../../fixtures/testFixtures.js';
import { loginData } from '../../test-data/loginData.js';

test('SauceDemo login page should open', async ({ loginPage })=>{
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
})

test('Standard user should login successfully', async({loginPage, page})=>{
    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.inventory_list')).toBeVisible();
})

test('Invalid password should show an error message', async({loginPage})=>{
    await loginPage.login(
        loginData.validUser.username,
        'wrong_password'
    );
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText(
        'Username and password do not match'
    );
});